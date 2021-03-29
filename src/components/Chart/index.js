import { Typography } from 'antd';
import useChart from '@hooks/swr/useChart';
import { useSelector } from 'react-redux';
import { ChartContainer, Title, MusicList } from './style';
import MusicListItem from '../MusicListItem';
import Spinner from '../Spinner';

const Chart = () => {
  const { site } = useSelector(state => state.config);
  const { data, error, loading } = useChart(site);
  if (error) {
    return <div>Error</div>;
  }

  return (
    <ChartContainer>
      <Title level={3}>Most Popular</Title>
      <Typography.Text type="secondary">100 Songs</Typography.Text>

      <MusicList>{loading ? <Spinner /> : data.map((v, i) => <MusicListItem {...v} key={i} />)}</MusicList>
    </ChartContainer>
  );
};

export default Chart;
