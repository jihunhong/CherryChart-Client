import { loadChart } from '@actions/chartActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import LandingPage from '@Template/landing';

const Home = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

Home.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadChart({
      site: 'melon',
    }),
  );
});

export default Home;
