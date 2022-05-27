import Image from 'next/image';
import { AlbumCoverContainer } from './style';

const AlbumCover = ({ size, src, className }) => {
  if (!src) {
    return <></>;
  }
  return (
    <AlbumCoverContainer className={className}>
      <Image src={src} width={size} height={size} />
    </AlbumCoverContainer>
  );
};

export default AlbumCover;
