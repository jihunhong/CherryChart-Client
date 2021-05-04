import { useRouter } from 'next/dist/client/router';
import useAlbum from '@hooks/swr/useAlbum';
import Spinner from '@components/Spinner';
import AlbumInfo from '@components/@organisms/AlbumInfo';
import TrackList from '@organisms/TrackList';

const AlbumDetail = () => {
  const router = useRouter();
  const { data, error, loading } = useAlbum(router.query.albumId);
  if (error) {
    return <>{error}</>;
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <AlbumInfo {...data} />
      <TrackList tracks={data.Music} />
    </>
  );
};

export default AlbumDetail;
