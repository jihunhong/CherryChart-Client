import CarouselItem from '@molecules/CarouselItem';
import MultiCarousel from 'react-slick';
import { RelatedAlbumsContainer } from './style';

const settings = {
  className: 'slider variable-width',
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: 1,
  variableWidth: true,
};

const RelatedAlbums = ({ dataSource = [], artist = '' }) => {
  return (
    <RelatedAlbumsContainer>
      <h2>{`More by ${artist}`}</h2>
      <MultiCarousel {...settings}>
        {dataSource.map(album => (
          <CarouselItem AlbumId={album.id} album={album.album} artist={album.artist} />
        ))}
      </MultiCarousel>
    </RelatedAlbumsContainer>
  );
};

export default RelatedAlbums;
