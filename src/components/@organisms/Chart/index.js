import Text from '@atoms/Text';
import Title from '@atoms/Title';
import ChartItem from '@molecules/ChartItem';
import { useSelector } from 'react-redux';
import { ChartContainer, MusicList } from './style';

const Chart = () => {
  const { chartData } = useSelector(state => state.chart);

  return (
    <ChartContainer>
      <Title level={3} text="Most Popular" />
      <Text type="secondary" text={`${chartData?.length} Songs`} />

      <MusicList>
        {chartData.map((item, i) => (
          <ChartItem rank={item.rank} {...item.music} key={item.rank} />
        ))}
      </MusicList>
    </ChartContainer>
  );
};

export default Chart;
