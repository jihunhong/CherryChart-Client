import AlbumCover from '@atoms/AlbumCover';
import { FlexColumn } from '@atoms/FlexColumn/style';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useCurrent from '@hooks/player/useCurrent';
import YoutubePlayer from '@molecules/YoutubePlayer';
import { BiPlay, BiRepeat, BiShuffle, BiSkipNext, BiSkipPrevious, BiVolume, BiVolumeFull } from 'react-icons/bi';
import { BarPlayerContainer } from './style';

const BarPlayer = () => {
  const [currentMusic] = useCurrent();
  const onClick = () => {
    window.YTPlayer.playVideo();
  };

  return (
    <BarPlayerContainer>
      {/* <YoutubePlayer /> */}
      <div className="player-action">
        <div className="icon-container">
          <BiSkipPrevious size={28} />
        </div>
        <div className="icon-container" onClick={onClick}>
          <BiPlay size={34} />
        </div>
        <div className="icon-container">
          <BiSkipNext size={28} />
        </div>
      </div>
      <div className="played-info">
        {currentMusic ? (
          <>
            <AlbumCover src={currentMusic?.smallCoverImage} size={38} />
            <FlexColumn>
              <Title level={5} text={currentMusic?.title} />
              <Text ellipsis text={`${currentMusic?.artistName} • ${currentMusic?.albumName}`} />
            </FlexColumn>
          </>
        ) : null}
      </div>
      <div className="player-action">
        <div className="icon-container">
          <BiVolumeFull size={18} />
        </div>
        <div className="icon-container">
          <BiRepeat size={18} />
        </div>
        <div className="icon-container">
          <BiShuffle size={18} />
        </div>
      </div>
    </BarPlayerContainer>
  );
};

export default BarPlayer;
