import AppLayout from "../components/AppLayout";
import Carousel from "../components/Carousel";
import Chart from "../components/Chart";
import Player from "../components/Player";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <AppLayout>
      <Carousel />

      <Row>
        <Col xs={12} lg={12} md={24} sm={24}>
          <Chart />
        </Col>

        <Col xs={12} lg={12} md={24} sm={24}>
          <Player />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Home;
