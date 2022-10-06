import Image from 'next/image';
import { forwardRef } from 'react';
import { AlbumCoverContainer } from './style';

const AlbumCover = ({ size, src, className, ...props }, ref) => {
  if (!src) {
    return <></>;
  }
  return (
    <AlbumCoverContainer $size={size} className={className} {...props} ref={ref}>
      <Image src={src} width={size} height={size} lazyBoundary={`${size * 2}px`} />
    </AlbumCoverContainer>
  );
};

export default forwardRef(AlbumCover);
