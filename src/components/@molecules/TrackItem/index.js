import useAddItem from '@hooks/useAddItem';
import { FaYoutube } from 'react-icons/fa';
import * as Styled from './style';

const TrackItem = ({ rank, title, artistName, albumName, albumId, videoId, smallCoverImage }) => {
  const [handleMusic] = useAddItem({
    title,
    artistName,
    albumId,
    albumName,
    videoId,
    smallCoverImage,
  });

  return (
    <Styled.TrackListItemContainer>
      <span className="rank">{rank}</span>
      <span className="title">{title}</span>
      {videoId && (
        <Styled.TrackActions onClick={handleMusic}>
          <FaYoutube size={18} />
        </Styled.TrackActions>
      )}
    </Styled.TrackListItemContainer>
  );
};

export default TrackItem;
