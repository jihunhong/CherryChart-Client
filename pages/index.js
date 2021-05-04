import AppLayout from '@components/AppLayout';
import Carousel from '@components/Carousel';
import Chart from '@components/Chart';
import Player from '@components/Player';
import { Row, Col } from 'antd';

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

export default Home;
