import { Controller } from '@nestjs/common';

@Controller('tracks')
export class TracksController {
  @Get()
  getAll() {
    return 'All tracks';
  }
}
