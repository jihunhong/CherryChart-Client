import SiteSelector from '@atoms/SiteSelector';
import Slider from '@atoms/Slider';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAggregateAlbum from '@hooks/useAggreateAlbum';
import CarouselItem from '@molecules/CarouselItem';
import { memo } from 'react';
import { CarouselGlobalStyle, ChartCarouselContainer } from './style';

const ChartCarousel = ({ dataSource = [] }) => {
  const albums = useAggregateAlbum(dataSource);

  return (
    <>
      <ChartCarouselContainer>
        <Title level={4} text={null}>
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

export default memo(ChartCarousel);
