import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UriService } from './uri/uri.service';
import { PrismaService } from './prisma/prisma.service';
import { UriController } from './uri/uri.controller';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [UriController, AppController],
  providers: [UriService, PrismaService, AppService],
})
export class AppModule {}
