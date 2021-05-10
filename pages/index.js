import AppLayout from '@Layout/AppLayout';
import Carousel from '@organisms/Carousel';
import Chart from '@organisms/Chart';
import { Col, Row } from 'antd';

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
