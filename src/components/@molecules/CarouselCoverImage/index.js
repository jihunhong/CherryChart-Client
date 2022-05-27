import Image from 'next/image';
import { CarouselCoverImageContainer } from './style';

const CarouselCoverImage = ({ size, src, className, alt }) => {
  return (
    <CarouselCoverImageContainer>
      <Image src={src} width={size} height={size} alt={alt} />
    </CarouselCoverImageContainer>
  );
};

export default CarouselCoverImage;
