import { loadUpdatedSongs, loadUpdatedVideos } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import BrowsePage from '@Template/browse';

const Browse = () => {
  return <BrowsePage />;
};

Browse.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedVideos());
  await context.store.dispatch(loadUpdatedSongs());
});

export default Browse;
