import Image from 'next/image';
import { CarouselCoverImageContainer } from './style';

const CarouselCoverImage = ({ size, src, className, alt }) => {
  return (
    <CarouselCoverImageContainer>
      <Image src={src} width={size} height={size} alt={alt} lazyBoundary="120px" />
    </CarouselCoverImageContainer>
  );
};

export default CarouselCoverImage;
