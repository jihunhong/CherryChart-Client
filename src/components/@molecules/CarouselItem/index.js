import { cdnURL } from '@config';
import Link from 'next/link';
import { Artist, CarouselCoverImage, CarouselItemContainer, Title } from './style';

const CarouselItem = ({ album, artist, AlbumId }) => {
  return (
    <CarouselItemContainer>
      <Link href={`/album/${AlbumId}`}>
        <a>
          <CarouselCoverImage
            background={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
          />
          <Title level={5}>{album.slice(0, 30)}</Title>
          <Artist>{artist.slice(0, 30)}</Artist>
        </a>
      </Link>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
