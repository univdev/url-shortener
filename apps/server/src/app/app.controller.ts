import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { HistoryType } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:shortKey')
  @Redirect('https://www.google.com', 302)
  public async redirectToFullUrl(
    @Param('shortKey') shortKey: string,
    @Query('type') type: HistoryType = 'link',
  ) {
    const uri = await this.appService.redirect(shortKey, type);

    return { url: uri.url };
  }
}
