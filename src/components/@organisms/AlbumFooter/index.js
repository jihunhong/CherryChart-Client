import dayjs from 'dayjs';
import { AlbumInfoContainer } from './style';

const AlbumFooter = ({ releaseDate, tracks, albumName }) => {
  return (
    <AlbumInfoContainer>
      <p>{dayjs(releaseDate).format('MMMM DD, YYYY')}</p>
      <p>{`${tracks?.length} Songs - ${albumName}`}</p>
    </AlbumInfoContainer>
  );
};

export default AlbumFooter;
