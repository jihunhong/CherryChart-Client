import { TrackAddIcon } from '@organisms/Carousel/style';
import { MusicList } from '@organisms/Chart/style';
import { FaYoutube } from 'react-icons/fa';
import * as Styled from './style';

const TrackList = ({ tracks }) => {
  return (
    <>
      <MusicList>
        {tracks.map((t, index) => (
          <Styled.TrackListItemContainer>
            <span className="rank">{index + 1}</span>
            <span className="title">{t.title}</span>
            {t.Video?.videoId && (
              <TrackAddIcon>
                <FaYoutube />
              </TrackAddIcon>
            )}
          </Styled.TrackListItemContainer>
        ))}
      </MusicList>
    </>
  );
};

export default TrackList;
