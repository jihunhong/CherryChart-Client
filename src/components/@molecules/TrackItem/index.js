import useAddItem from '@hooks/useAddItem';
import { TrackAddIcon } from '@organisms/ChartCarousel/style';
import { FaYoutube } from 'react-icons/fa';
import * as Styled from './style';

const TrackItem = ({ rank, title, artistName, albumName, albumId, videoId, smallCoverImage }) => {
  const [handleMusic] = useAddItem({ title, artistName, albumId, albumName, videoId, smallCoverImage });

  return (
    <Styled.TrackListItemContainer>
      <span className="rank">{rank}</span>
      <span className="title">{title}</span>
      {videoId && (
        <TrackAddIcon onClick={handleMusic}>
          <FaYoutube />
        </TrackAddIcon>
      )}
    </Styled.TrackListItemContainer>
  );
};

export default TrackItem;
