import { loadChart } from '@actions/chartActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';

const ChartPage = () => {
  return (
    <>
      <Landing />
    </>
  );
};

ChartPage.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadChart({
      site: 'melon',
    }),
  );
});

export default ChartPage;
