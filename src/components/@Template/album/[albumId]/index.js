import AlbumFooter from '@organisms/AlbumFooter';
import AlbumSnippet from '@organisms/AlbumSnippet';
import RelatedAlbums from '@organisms/RelatedAlbums';
import TrackList from '@organisms/TrackList';
import { useSelector } from 'react-redux';

const AlbumDetail = () => {
  const { albums, artist } = useSelector(state => state.album);
  return (
    <>
      <AlbumSnippet />
      <TrackList />
      <AlbumFooter />
      <RelatedAlbums dataSource={albums} artist={artist} />
    </>
  );
};

export default AlbumDetail;
