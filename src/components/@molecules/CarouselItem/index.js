import LinkHOC from '@atoms/LinkHOC';
import Title from '@atoms/Title';
import CarouselCoverImage from '@molecules/CarouselCoverImage';
import { memo } from 'react';
import { Artist, CarouselItemContainer } from './style';

const CarouselItem = ({ albumName, artistName, albumId, middleCoverImage }) => {
  return (
    <CarouselItemContainer>
      <LinkHOC href={`/album/${albumId}`}>
        <CarouselCoverImage src={middleCoverImage} size={300} alt={`${albumName} cover image`} />
        <Title level={5} ellipsis text={albumName?.substring(0, 30)} />
        <Artist>{artistName?.substring(0, 30)}</Artist>
      </LinkHOC>
    </CarouselItemContainer>
  );
};

export default memo(CarouselItem);
