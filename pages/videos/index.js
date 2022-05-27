import { loadUpdatedVideos } from '@actions/contentActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import VideoPage from '@Template/videos';

const Videos = () => {
  return <VideoPage />;
};

Videos.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(loadUpdatedVideos());
});

export default Videos;
