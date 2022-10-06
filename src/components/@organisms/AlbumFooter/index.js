import dayjs from 'dayjs';
import { StyledAlbumFooter } from './style';

const AlbumFooter = ({ releaseDate, tracks, albumName }) => {
  return (
    <StyledAlbumFooter>
      <p>{dayjs(releaseDate).format('MMMM DD, YYYY')}</p>
      <p>{`${tracks?.length} Songs - ${albumName}`}</p>
    </StyledAlbumFooter>
  );
};

export default AlbumFooter;
