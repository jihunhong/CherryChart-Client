import { loadUpdatedVideos } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import dynamic from 'next/dynamic';

const Videos = () => {
  const VideoPage = dynamic(() => import('@Template/videos'));
  return <VideoPage />;
};

Videos.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedVideos());
});

export default Videos;
