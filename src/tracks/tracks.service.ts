import { Injectable } from '@nestjs/common';

const tracks = [
  { id: 1, name: 'Track 1' },
  { id: 2, name: 'Track 2' },
  { id: 3, name: 'Track 3' },
];

@Injectable()
export class TracksService {
  getAll() {
    return tracks;
  }

  getOne(id: string) {
    return tracks.find((track) => track.id === +id);
  }

  createTrack() {
    const id = Date.now().toString();
    return id;
  }

  updateTrack() {
    return 'Track updated';
  }

  deleteTrack() {
    return 'Track deleted';
  }
}
