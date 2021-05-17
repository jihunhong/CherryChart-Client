import AppLayout from '@Layout/AppLayout';
import Carousel from '@organisms/Carousel';
import Chart from '@organisms/Chart';
import chartSlice from '@reducers/chart';
import wrapper from '@store/configureStore';
import { Col, Row } from 'antd';
import { END } from 'redux-saga';

const Home = () => {
  return (
    <>
      <Carousel />

      <Row>
        <Col xs={24} lg={24} md={24} sm={24}>
          <Chart />
        </Col>
      </Row>
    </>
  );
};

Home.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  context.store.dispatch(
    chartSlice.actions.chartDataRequest({
      site: 'melon',
    }),
  );

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
