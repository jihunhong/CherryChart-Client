import { useRouter } from 'next/dist/client/router';
import useAlbum from '@hooks/swr/useAlbum';
import Spinner from '@components/Spinner';
import AlbumInfo from '@components/@organisms/AlbumInfo';
import TrackList from '@organisms/TrackList';
import { Title } from '@components/Chart/style';

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
      {/* <Title level={5}>{`More by ${data.artist}`}</Title> */}
    </>
  );
};

export default AlbumDetail;
