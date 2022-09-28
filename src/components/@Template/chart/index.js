import BestArtist from '@molecules/BestArtist';
import Chart from '@organisms/Chart';
import ChartCarousel from '@organisms/ChartCarousel';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

const ChartPage = () => {
  const chartData = useSelector(state => state.chart.chartData);
  return (
    <>
      <BestArtist
        src="https://cherry-chart.imgix.net/static/best.png?auto=format"
        artistName="ZICO"
      />
      <ChartCarousel dataSource={chartData} />
      <Row>
        <Col xs={24} lg={24} md={24} sm={24}>
          <Chart dataSource={chartData} />
        </Col>
      </Row>
    </>
  );
};

export default ChartPage;
