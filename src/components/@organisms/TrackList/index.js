import { MusicList } from '@components/Chart/style';
import { TrackListItemContainer, TrackRank, TrackTitle } from './style';
import { Divider } from 'antd';
import { FaYoutube } from 'react-icons/fa';
import { TrackAddIcon } from '@components/Carousel/style';

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
