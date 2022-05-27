import { loadChart } from '@actions/chartActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import ChartPage from '@Template/chart';

const Chart = () => {
  return <ChartPage />;
};

Chart.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadChart({
      site: 'melon',
    }),
  );
});

export default Chart;
