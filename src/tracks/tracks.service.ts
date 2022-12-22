import { Injectable } from '@nestjs/common';

@Injectable()
export class TracksService {
  getAll() {
    return [
      { id: 1, name: 'Track 1' },
      { id: 2, name: 'Track 2' },
      { id: 3, name: 'Track 3' },
    ];
  }

  createTrack() {
    const id = Date.now().toString();
    return id;
  }
}
