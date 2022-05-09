import { loadAlbumInfo, loadArtistsAlbum } from '@actions/albumActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import dynamic from 'next/dynamic';

const AlbumDetailPage = () => {
  const AlbumDetail = dynamic(() => import('@Template/album/[albumId]'));
  return <AlbumDetail />;
};

AlbumDetailPage.getLayout = page => <AppLayout>{page}</AppLayout>;
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadAlbumInfo({
      albumId: context.query.albumId,
    }),
  );
  await context.store.dispatch(
    loadArtistsAlbum({
      artistName: context.store.getState().album.artistName,
    }),
  );
});

export default AlbumDetailPage;
