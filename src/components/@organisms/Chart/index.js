import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAddChart from '@hooks/player/useAddChart';
import ChartItem from '@molecules/ChartItem';
import { Button } from 'antd';
import { BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { ChartContainer, Header, StyledChartList } from './style';

const Chart = ({ dataSource = [] }) => {
  const [handleAdd, handleShuffle] = useAddChart();

  return (
    <ChartContainer>
      <Title level={3} text="Most Popular" />
      <Text type="secondary" text={`${dataSource?.length} Albums`} />

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

      <StyledChartList>
        {dataSource.map(item => (
          <ChartItem rank={item.rank} {...item.music} key={item.rank} />
        ))}
      </StyledChartList>
    </ChartContainer>
  );
};

export default Chart;
