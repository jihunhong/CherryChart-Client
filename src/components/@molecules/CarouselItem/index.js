import { cdnURL } from '@config';
import { Artist, CarouselCoverImage, CarouselItemContainer, Title } from './style';

const CarouselItem = ({ album, artist }) => {
  return (
    <CarouselItemContainer>
      <CarouselCoverImage
        background={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
      />
      <Title level={5}>{album.slice(0, 30)}</Title>
      <Artist>{artist.slice(0, 30)}</Artist>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
