import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAddChart from '@hooks/player/useAddChart';
import ChartItem from '@molecules/ChartItem';
import { Button, Divider, Row } from 'antd';
import { BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { ChartContainer, Header, MusicList } from './style';

const Chart = () => {
  const chartData = useSelector(state => state.chart.chartData);
  const [handleAdd, handleShuffle] = useAddChart();

  return (
    <ChartContainer>
      <Title level={3} text="Most Popular" />
      <Text type="secondary" text={`${chartData?.length} Albums`} />

      <Header>
        <div className="flex-container all">
          <Button type="primary" icon={<BsFillPlayFill color="#fff" />} onClick={handleAdd}>
            PLAY ALL
          </Button>
        </div>
        <div className="flex-container shuffle">
          <Button icon={<BsShuffle color="#a3a0a0" />} onClick={handleShuffle}>
            SHUFFLE
          </Button>
        </div>
      </Header>

      <MusicList>
        {chartData.map(item => (
          <ChartItem rank={item.rank} {...item.music} key={item.rank} />
        ))}
      </MusicList>
    </ChartContainer>
  );
};

export default Chart;
