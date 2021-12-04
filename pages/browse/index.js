import { loadUpdatedSongs, loadUpdatedVideos } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import dynamic from 'next/dynamic';

const Browse = () => {
  const BrowsePage = dynamic(() => import('@Template/browse'));
  return <BrowsePage />;
};

Browse.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedVideos());
  await context.store.dispatch(loadUpdatedSongs());
});

export default Browse;
