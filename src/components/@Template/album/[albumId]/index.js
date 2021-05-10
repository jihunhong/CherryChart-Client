import Spinner from '@atoms/Spinner';
import AlbumInfo from '@components/@organisms/AlbumInfo';
import useAlbum from '@hooks/swr/useAlbum';
import TrackList from '@organisms/TrackList';
import { useRouter } from 'next/dist/client/router';

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
