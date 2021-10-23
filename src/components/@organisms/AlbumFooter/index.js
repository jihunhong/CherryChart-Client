import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { AlbumInfoContainer } from './style';

const AlbumFooter = () => {
  const album = useSelector(state => state.album);
  return (
    <AlbumInfoContainer>
      <p>{dayjs(album?.releaseDate).format('MMMM DD, YYYY')}</p>
      <p>{`${album?.tracks?.length} Songs - ${album?.albumName}`}</p>
    </AlbumInfoContainer>
  );
};

export default AlbumFooter;
