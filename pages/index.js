import AppLayout from "../components/AppLayout";
import Carousel from "../components/Carousel";
import Chart from "../components/Chart";
import Player from "../components/Player";

const Home = () => {
  return (
    <AppLayout>
      <Carousel />
      <Chart />
      <Player />
    </AppLayout>
  );
};

export default Home;
