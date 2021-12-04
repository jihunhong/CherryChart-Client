import { loadArtistsAlbum } from '@actions/albumActions';
import { loadAlbumInfo } from '@actions/contentActions';
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
  console.log(context.store.getState().album.artist);
  await context.store.dispatch(
    loadArtistsAlbum({
      artistName: context.store.getState().album.artist,
    }),
  );
});

export default AlbumDetailPage;
