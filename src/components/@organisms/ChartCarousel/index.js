import SiteSelector from '@atoms/SiteSelector';
import Slider from '@atoms/Slider';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import aggregateAlbum from '@lib/aggregateAlbum';
import CarouselItem from '@molecules/CarouselItem';
import { useSelector } from 'react-redux';
import { CarouselGlobalStyle, ChartCarouselContainer } from './style';

const ChartCarousel = ({ title, subtext }) => {
  const { chartData } = useSelector(state => state.chart);

  const albums = aggregateAlbum(chartData);

  return (
    <>
      <ChartCarouselContainer>
        <Title level={4}>
          <SiteSelector />
        </Title>
        <Text text={`${albums?.length || 0} Albums`} />
        <CarouselGlobalStyle />
        <Slider
          occupy="14%"
          dataSource={albums}
          renderItem={item => <CarouselItem key={item.music.albumId} {...item.music} />}
        />
      </ChartCarouselContainer>
    </>
  );
};

export default ChartCarousel;
