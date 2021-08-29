import ChartItem from '@molecules/ChartItem';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ChartContainer, MusicList, Title } from './style';

const Chart = () => {
  const { chartData } = useSelector(state => state.chart);

  return (
    <ChartContainer>
      <Title level={3}>Most Popular</Title>
      <Typography.Text type="secondary">{`${chartData?.length} Songs`}</Typography.Text>

      <MusicList>
        {chartData.map((v, i) => (
          <ChartItem rank={v.rank} {...v.Music} key={i} />
        ))}
      </MusicList>
    </ChartContainer>
  );
};

export default Chart;
