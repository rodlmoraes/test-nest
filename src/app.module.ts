import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { HttpModule } from '@nestjs/axios';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, DogController],
  providers: [AppService, UserService, PostService, PrismaService, DogService],
})
export class AppModule {}
