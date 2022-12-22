import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Redirect,
  Put,
} from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get('all')
  @HttpCode(200)
  getAll() {
    return this.tracksService.getAll();
  }

  @Get('one')
  @HttpCode(200)
  getOne() {
    return this.tracksService.getAll()[0];
  }

  @Put('create')
  @HttpCode(201) // 201 Created
  create() {
    return this.tracksService.createTrack();
  }

  @Patch('update')
  @HttpCode(202) // 202 Accepted
  update() {
    return this.tracksService.updateTrack();
  }

  @Delete('delete')
  @HttpCode(204) // 204 No Content
  delete() {
    return this.tracksService.deleteTrack();
  }

  @Get('all-old')
  @Redirect('all', 301)
  getAllOld() {
    return this.tracksService.getAll(); // This will never be called
  }
}
