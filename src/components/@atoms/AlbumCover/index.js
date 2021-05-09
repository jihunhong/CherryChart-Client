import { Avatar } from 'antd';
import { cdnURL } from '@config';

const AlbumCover = ({ size, album, radius }) => {
  return (
    <>
      <Avatar style={{ borderRadius: radius }} shape="square" size={size} src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
    </>
  );
};

export default AlbumCover;
