import { Controller } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get('tracks')
  getAll() {
    return this.tracksService.getAll();
  }
}
