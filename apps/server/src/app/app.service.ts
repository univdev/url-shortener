import { Injectable } from '@nestjs/common';
import { HistoryType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UriService } from 'src/uri/uri.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uriService: UriService,
  ) {}

  public async redirect(shortKey: string, type: HistoryType) {
    const uri = await this.uriService.getFullUrlByShortKey(shortKey);
    await this.prismaService.history.create({
      data: {
        type: type,
        uriId: uri.id,
      },
    });

    return uri;
  }
}
