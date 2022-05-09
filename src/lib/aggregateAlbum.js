const aggregateAlbum = data => {
  if (data) {
    const albums = Array.from(new Set(data.map(v => v.music.albumName))).map(albumName => {
      const target = data.find(v => v.music.albumName === albumName);
      return target;
    });

    return albums;
  }
  return undefined;
};

export default aggregateAlbum;
