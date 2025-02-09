import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createHash } from 'crypto';
import * as qrcode from 'qrcode';

@Injectable()
export class UriService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUris(offset = 0, limit = 10) {
    return this.prismaService.uri.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createShortUrl(url: string) {
    const urlRegex = /^(https?:\/\/)?[^\s/$.?#].[^\s]*$/i;
    if (!url) throw new BadRequestException('URL is required');
    if (!urlRegex.test(url)) throw new BadRequestException('Invalid URL');

    const shortKey = this.getShortKey(url);
    const generatedUri = await this.prismaService.uri.create({
      data: {
        url,
        shortKey,
      },
    });

    return generatedUri;
  }

  /**
   * MEMO: md5로 인코딩 후 첫 6글자를 ShortKey로 사용합니다.
   */
  getShortKey(url: string) {
    const salt = new Date().getTime().toString();
    return createHash('md5')
      .update(url + salt)
      .digest('hex')
      .slice(0, 6);
  }

  async getFullUrlByShortKey(shortKey: string) {
    const uri = await this.prismaService.uri.findUnique({
      where: {
        shortKey,
      },
    });

    if (!uri) {
      throw new NotFoundException('URI not found');
    }

    return uri;
  }

  getQR(uri: string) {
    return new Promise<string>((resolve, reject) => {
      qrcode.toDataURL(uri, (err, uri) => {
        if (uri) resolve(uri);
        else reject(err);
      });
    });
  }
}
