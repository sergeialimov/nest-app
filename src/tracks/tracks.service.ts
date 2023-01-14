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

  createTrack(name: string) {
    const id = tracks.length + 1;
    tracks.push({ id, name });
    return { id, name };
  }

  updateTrack() {
    return 'Track updated';
  }

  deleteTrack() {
    return 'Track deleted';
  }
}
