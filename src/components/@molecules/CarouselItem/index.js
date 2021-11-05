import LinkHOC from '@atoms/LinkHOC';
import Title from '@atoms/Title';
import { cdnURL } from '@config';
import { Artist, CarouselCoverImage, CarouselItemContainer } from './style';

const CarouselItem = ({ album, artist, AlbumId }) => {
  return (
    <CarouselItemContainer>
      <LinkHOC href={`/album/${AlbumId}`}>
        <CarouselCoverImage
          background={`${cdnURL}/${album?.replace(
            /[`~!@#$%^&*|\\\'\";:\/?]/g,
            '_',
          )}.png`}
        />
        <Title level={5} ellipsis text={album?.slice(0, 30)} />
        <Artist>{artist.slice(0, 30)}</Artist>
      </LinkHOC>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
