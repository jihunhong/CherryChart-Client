import { AlbumInfoContainer } from './style';
import Title from '@atoms/Title';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const AlbumFooter = () => {
  const album = useSelector(state => state.content);
  return (
    <AlbumInfoContainer>
      <p>{dayjs(album?.releaseDate).format('MMMM DD, YYYY')}</p>
      <p>{`${album?.tracks?.length} Songs - ${album?.albumName}`}</p>
    </AlbumInfoContainer>
  );
};

export default AlbumFooter;
