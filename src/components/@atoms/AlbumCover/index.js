import { cdnURL } from '@config';
import { StyledAvatar } from './style';

const AlbumCover = ({ size, albumName, radius }) => {
  if (!albumName) {
    return <></>;
  }
  return (
    <>
      <StyledAvatar
        shape="square"
        size={size}
        src={`${cdnURL}/${albumName.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
      />
    </>
  );
};

export default AlbumCover;
