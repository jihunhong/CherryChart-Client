const aggregateAlbum = data => {
  if (data) {
    const albums = Array.from(new Set(data.map(v => v.Music.album))).map(albumName => {
      const target = data.find(v => v.Music.album === albumName);
      return target;
    });

    return albums;
  }
  return undefined;
};

export default aggregateAlbum;
