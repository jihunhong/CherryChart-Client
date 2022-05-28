import Image from 'next/image';
import { AlbumCoverContainer } from './style';

const AlbumCover = ({ size, src, className, ...props }) => {
  if (!src) {
    return <></>;
  }
  return (
    <AlbumCoverContainer $size={size} className={className} {...props}>
      <Image src={src} width={size} height={size} />
    </AlbumCoverContainer>
  );
};

export default AlbumCover;
