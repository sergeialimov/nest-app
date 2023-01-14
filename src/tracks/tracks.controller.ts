import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Redirect,
  Put,
  Param,
  Query,
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

  // path params
  @Get('one/:id')
  @HttpCode(200)
  getOneQuery1(@Param('id') id) {
    return this.tracksService.getOne(+id);
  }

  // query params
  @Get('one2')
  @HttpCode(200)
  getOneQuery2(@Query('id') id) {
    return this.tracksService.getOne(+id);
  }

  @Get('one3')
  @HttpCode(200)
  getOneQuery3(@Query() query) {
    return this.tracksService.getOne(+query.id);
  }

  @Put('create')
  @HttpCode(201) // 201 Created
  create(@Query() query) {
    return this.tracksService.createTrack(query.name);
  }

  @Patch('update-name')
  @HttpCode(202) // 202 Accepted
  update(@Query() query) {
    return this.tracksService.updateTrack(+query.id, query.name);
  }

  @Delete('delete')
  @HttpCode(204) // 204 No Content
  delete(@Query('id') id: number) {
    return this.tracksService.deleteTrack(+id);
  }

  @Get('all-redirect')
  @Redirect('all', 301)
  getAllOld() {
    return null; // This will never be called
  }
}
