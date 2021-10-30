import AlbumFooter from '@organisms/AlbumFooter';
import AlbumSnippet from '@organisms/AlbumSnippet';
import RelatedAlbums from '@organisms/RelatedAlbums';
import TrackList from '@organisms/TrackList';
import { useSelector } from 'react-redux';

const AlbumDetail = () => {
  const { albums, artist, tracks, releaseDate, albumName } = useSelector(state => state.album);
  return (
    <>
      <AlbumSnippet />
      <TrackList dataSource={tracks} />
      <AlbumFooter releaseDate={releaseDate} tracks={tracks} albumName={albumName} />
      <RelatedAlbums dataSource={albums} artist={artist} />
    </>
  );
};

export default AlbumDetail;
