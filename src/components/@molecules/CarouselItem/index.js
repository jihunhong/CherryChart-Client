import LinkHOC from '@atoms/LinkHOC';
import Title from '@atoms/Title';
import { cdnURL } from '@config';
import { Artist, CarouselCoverImage, CarouselItemContainer } from './style';

const CarouselItem = ({ albumName, artistName, albumId }) => {
  return (
    <CarouselItemContainer>
      <LinkHOC href={`/album/${albumId}`}>
        <CarouselCoverImage
          src={`${cdnURL}/${albumName?.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
        />
        <Title level={5} ellipsis text={albumName?.slice(0, 30)} />
        <Artist>{artistName?.slice(0, 30)}</Artist>
      </LinkHOC>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
