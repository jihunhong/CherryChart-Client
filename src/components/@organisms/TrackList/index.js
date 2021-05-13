import { TrackAddIcon } from '@organisms/Carousel/style';
import { MusicList } from '@organisms/Chart/style';
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
            {t.Video?.videoId && (
              <TrackAddIcon>
                <FaYoutube />
              </TrackAddIcon>
            )}
          </TrackListItemContainer>
        ))}
      </MusicList>
    </>
  );
};

export default TrackList;
