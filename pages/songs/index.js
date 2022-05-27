import { loadUpdatedSongs } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import SongPage from '@Template/songs';

const Song = () => {
  return <SongPage />;
};

Song.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedSongs());
});

export default Song;
