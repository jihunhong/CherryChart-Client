import Spinner from '@atoms/Spinner';
import useChart from '@hooks/swr/useChart';
import MusicListItem from '@molecules/MusicListItem';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ChartContainer, MusicList, Title } from './style';

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

      <MusicList>
        {loading ? (
          <Spinner />
        ) : (
          data.map((v, i) => <MusicListItem rank={v.rank} {...v.Music} key={i} />)
        )}
      </MusicList>
    </ChartContainer>
  );
};

export default Chart;
