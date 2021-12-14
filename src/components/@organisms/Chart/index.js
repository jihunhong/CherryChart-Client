import Title from '@atoms/Title';
import ChartItem from '@molecules/ChartItem';
import { useSelector } from 'react-redux';
import { ChartContainer, MusicList } from './style';
import Text from '@atoms/Text';

const Chart = () => {
  const { chartData } = useSelector(state => state.chart);

  return (
    <ChartContainer>
      <Title level={3} text={'Most Popular'} />
      <Text type="secondary" text={`${chartData?.length} Songs`} />

      <MusicList>
        {chartData.map((v, i) => (
          <ChartItem rank={v.rank} {...v.Music} key={i} />
        ))}
      </MusicList>
    </ChartContainer>
  );
};

export default Chart;
