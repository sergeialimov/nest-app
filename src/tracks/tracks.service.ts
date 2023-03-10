const tracks = {
  1: {
    id: 1,
    name: 'Track 1',
    hidden: false,
  },
  2: {
    id: 2,
    name: 'Track 2',
    hidden: false,
  },
  3: {
    id: 3,
    name: 'Track 3',
    hidden: false,
  },
  4: {
    id: 4,
    name: 'Track 4',
    hidden: true,
  },
};

export class TracksService {
  getAll() {
    const tracksArr = Object.values(tracks);
    return tracksArr.filter((track) => !track.hidden);
  }

  getOne(id: number) {
    if (typeof id !== 'number') {
      return 'Id should be a number';
    }
    if (id <= 0 || id > Object.keys(tracks).length) {
      return `Id ${id} is not correct`;
    }
    if (tracks[id].hidden) {
      return `Track ${id} is hidden`;
    }
    return tracks[id];
  }

  createTrack(name: string) {
    const id = Object.keys(tracks).length + 1;
    tracks[id] = {
      id,
      name,
      hiddden: false,
    };
    return tracks[id];
  }

  updateTrack(id: number, newName: string) {
    if (typeof id !== 'number') {
      return 'Id should be a number';
    }
    if (id <= 0 || id > Object.keys(tracks).length) {
      return `Id ${id} is not correct`;
    }
    const track = tracks[id];
    track.name = newName;
    return track;
  }

  deleteTrack(id: number) {
    if (typeof id !== 'number') {
      return 'Id should be a number';
    }
    if (id <= 0 || id > Object.keys(tracks).length) {
      return `Id ${id} is not correct`;
    }
    const track = tracks[id];
    track.hidden = true;
  }
}
