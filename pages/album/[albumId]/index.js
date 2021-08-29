import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import AlbumDetail from '@Template/album/[albumId]';
import { loadAlbumInfo } from '@actions/contentActions';

const AlbumDetailPage = () => {
  return <AlbumDetail />;
};

AlbumDetailPage.getLayout = page => <AppLayout>{page}</AppLayout>;
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadAlbumInfo({
      albumId: context.query.albumId,
    }),
  );
});

export default AlbumDetailPage;
