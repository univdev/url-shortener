import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UriService } from './uri.service';
import { ConfigService } from '@nestjs/config';

@Controller('uri')
export class UriController {
  constructor(
    private readonly uriService: UriService,
    private readonly configService: ConfigService,
  ) {}

  @Get('/')
  public async getUris(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ) {
    const numOffset = Number(offset);
    const numLimit = Number(limit);
    return this.uriService.getUris(numOffset, numLimit);
  }

  @Post('/')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        url: { type: 'string' },
      },
    },
  })
  public async createShortUrl(@Body('url') url: string) {
    return this.uriService.createShortUrl(url);
  }

  @Get('/full-url')
  public async getFullUrlByShortKey(@Query('shortKey') shortKey: string) {
    return this.uriService.getFullUrlByShortKey(shortKey);
  }

  @Get('/qr')
  public async getQR(@Query('shortKey') shortKey: string) {
    const uri = await this.uriService.getFullUrlByShortKey(shortKey);
    const qr = await this.uriService.getQR(
      `${this.configService.get<string>('SERVER_ORIGIN')}/${uri.shortKey}`,
    );

    return qr;
  }
}
