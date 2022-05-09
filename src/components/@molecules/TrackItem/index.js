import useAddItem from '@hooks/useAddItem';
import { TrackAddIcon } from '@organisms/Carousel/style';
import { FaYoutube } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import * as Styled from './style';

const TrackItem = ({ title, rank, videoId }) => {
  const { artistName, albumName } = useSelector(state => state.album);
  const [handleMusic] = useAddItem({ title, artistName, album: albumName, videoId });

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
