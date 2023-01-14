const tracks = 
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

  updateTrack(trackId: number, newName: string) {
    const track = tracks.find(({ id }) => id === +trackId);
    track.name = newName;
    return track;
  }

  deleteTrack(id: number) {
    console.log(id, typeof id);
    const index = tracks.findIndex((track) => track.id === id);
    console.log(index);
    if (index !== -1 && !tracks[index].hidden) {
      delete tracks[index];
      console.log(tracks);
    }
    return `Specified song wasn't found`;
  }
}
