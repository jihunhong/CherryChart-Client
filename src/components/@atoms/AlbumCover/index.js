import { cdnURL } from '@config';
import { Avatar } from 'antd';

const AlbumCover = ({ size, album, radius }) => {
  return (
    <>
      <Avatar
        shape="square"
        size={size}
        src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
      />
    </>
  );
};

export default AlbumCover;
