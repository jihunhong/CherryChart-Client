import AppLayout from '@Layout/AppLayout';
import Carousel from '@organisms/Carousel';
import Chart from '@organisms/Chart';
import wrapper from '@store/configureStore';
import { Col, Row } from 'antd';
import { loadChart } from '@actions/chartActions';

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
  await context.store.dispatch(
    loadChart({
      site: 'melon',
    }),
  );
});

export default Home;
