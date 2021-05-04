import AppLayout from '@components/AppLayout';
import AlbumDetail from '@Template/album/[albumId]';

const AlbumDetailPage = () => {
  return <AlbumDetail />;
};

AlbumDetailPage.getLayout = page => <AppLayout>{page}</AppLayout>;

export default AlbumDetailPage;
