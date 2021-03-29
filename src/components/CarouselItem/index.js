import { CarouselItemContainer, CarouselCoverImage, Title, Artist } from './style';
import { cdnURL } from '@config';

const CarouselItem = ({ album, artist }) => {
  return (
    <CarouselItemContainer>
      <CarouselCoverImage background={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
      <Title level={5}>{album.slice(0, 30)}</Title>
      <Artist>{artist.slice(0, 30)}</Artist>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
