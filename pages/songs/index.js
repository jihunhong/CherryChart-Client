import { loadUpdatedSongs } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import dynamic from 'next/dynamic';

const Song = () => {
  const SongPage = dynamic(() => import('@Template/songs'));
  return <SongPage />;
};

Song.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedSongs());
});

export default Song;
