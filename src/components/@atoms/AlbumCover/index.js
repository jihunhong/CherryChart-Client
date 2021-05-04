import { Avatar } from 'antd';
import { cdnURL } from '@config';

const AlbumCover = ({ size, album }) => {
  return (
    <>
      <Avatar shape="square" size={size} src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
    </>
  );
};

export default AlbumCover;
