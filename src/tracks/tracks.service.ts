const tracks = [
  { id: 1, name: 'Track 1', hidden: false },
  { id: 2, name: 'Track 2', hidden: false },
  { id: 3, name: 'Track 3', hidden: false },
];

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
