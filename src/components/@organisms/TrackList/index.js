import { TrackAddIcon } from '@components/Carousel/style';
import { MusicList } from '@components/Chart/style';
import { FaYoutube } from 'react-icons/fa';
import { TrackListItemContainer, TrackRank, TrackTitle } from './style';

const TrackList = ({ tracks }) => {
  return (
    <>
      <MusicList>
        {tracks.map((t, index) => (
          <TrackListItemContainer>
            <TrackRank>{index + 1}</TrackRank>
            <TrackTitle>{t.title}</TrackTitle>
            <TrackAddIcon>
              <FaYoutube />
            </TrackAddIcon>
          </TrackListItemContainer>
        ))}
      </MusicList>
    </>
  );
};

export default TrackList;
