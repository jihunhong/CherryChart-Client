import { cdnURL } from '@config';
import { StyledAvatar } from './style';

const AlbumCover = ({ size, album, radius }) => {
  if (!album) {
    return <></>;
  }
  return (
    <>
      <StyledAvatar
        shape="square"
        size={size}
        src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
      />
    </>
  );
};

export default AlbumCover;
