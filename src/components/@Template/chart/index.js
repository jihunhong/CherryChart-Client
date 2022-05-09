import Chart from '@organisms/Chart';
import ChartCarousel from '@organisms/ChartCarousel';
import { Col, Row } from 'antd';

const ChartPage = () => {
  return (
    <>
      <ChartCarousel />
      <Row>
        <Col xs={24} lg={24} md={24} sm={24}>
          <Chart />
        </Col>
      </Row>
    </>
  );
};

export default ChartPage;
