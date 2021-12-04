import { loadChart } from '@actions/chartActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import dynamic from 'next/dynamic';

const Chart = () => {
  const ChartPage = dynamic(() => import('@Template/chart'));
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
