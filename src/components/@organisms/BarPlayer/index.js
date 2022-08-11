import AlbumCover from '@atoms/AlbumCover';
import { FlexColumn } from '@atoms/FlexColumn/style';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useBarPlayer from '@hooks/player/useBarPlayer';
import useCurrent from '@hooks/player/useCurrent';
import useToggle from '@hooks/util/useToggle';
import YoutubePlayer from '@molecules/YoutubePlayer';
import { BiCaretUp, BiPause, BiPlay, BiRepeat, BiShuffle, BiSkipNext, BiSkipPrevious, BiStop, BiVolume, BiVolumeFull } from 'react-icons/bi';
import { BarPlayerContainer } from './style';

const BarPlayer = () => {
  const [currentMusic] = useCurrent();
  const { playing, onStateChange, playerHandler, nextHandler, previouseHandler } = useBarPlayer();

  return (
    <BarPlayerContainer>
      <YoutubePlayer onStateChange={onStateChange} />
      <div className="player-action">
        <div className="icon-container" onClick={previouseHandler}>
          <BiSkipPrevious size={28} />
        </div>
        <div className="icon-container" onClick={playerHandler}>
          {playing ? <BiPause size={34} /> : <BiPlay size={34} />}
        </div>
        <div className="icon-container" onClick={nextHandler}>
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
        <div className="icon-container">
          <BiCaretUp size={18} />
        </div>
      </div>
    </BarPlayerContainer>
  );
};

export default BarPlayer;
