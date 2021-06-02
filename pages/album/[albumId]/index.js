import AppLayout from '@Layout/AppLayout';
import contentSlice from '@reducers/content';
import wrapper from '@store/configureStore';
import AlbumDetail from '@Template/album/[albumId]';
import { END } from 'redux-saga';

const AlbumDetailPage = () => {
  return <AlbumDetail />;
};

AlbumDetailPage.getLayout = page => <AppLayout>{page}</AppLayout>;
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  context.store.dispatch(
    contentSlice.actions.albumDataRequest({
      albumId: context.query.albumId,
    }),
  );

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default AlbumDetailPage;
