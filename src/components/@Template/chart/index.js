import Carousel from '@organisms/Carousel';
import Chart from '@organisms/Chart';
import { Col, Row } from 'antd';

const ChartPage = () => {
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

export default ChartPage;
