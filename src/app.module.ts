import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksController } from './tracks/tracks.controller';
import { TracksService } from './tracks/tracks.service';

@Module({
  imports: [],
  controllers: [AppController, TracksController],
  providers: [AppService, TracksService],
})
export class AppModule {}
