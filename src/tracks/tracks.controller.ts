import { Controller, Get, Post } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get('all')
  getAll() {
    return this.tracksService.getAll();
  }

  @Post('create')
  create() {
    return this.tracksService.createTrack();
  }
}
