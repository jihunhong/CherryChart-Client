import { FlexColumn } from '@atoms/FlexColumn/style';
import useBarAction from '@hooks/player/useBarAction';
import useBarPlayer from '@hooks/player/useBarPlayer';
import useCurrent from '@hooks/player/useCurrent';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import YoutubePlayer from '@molecules/YoutubePlayer';
import { BarPlaylistContainer } from '@organisms/BarPlaylist/style';
import dynamic from 'next/dynamic';
import { BiCaretUp, BiHeart, BiPause, BiPlay, BiRepeat, BiShuffle, BiSkipNext, BiSkipPrevious, BiVolumeFull } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { BarPlayerContainer } from './style';

const BarPlaylist = dynamic(() => import('@organisms/BarPlaylist'), {
  ssr: false,
});

const BarPlayer = () => {
  const [currentMusic] = useCurrent();
  const { playing, onStateChange, playerHandler, nextHandler, previouseHandler } = useBarPlayer();
  const { handleRepeat, handleShuffle, handleTogglePlaylist } = useBarAction();
  const loop = useSelector(state => state.player.loop);
  const isExpand = useSelector(state => state.player.isExpand);

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
          <PlayerMusicItem {...currentMusic} coverImage={currentMusic?.smallCoverImage}>
            <FlexColumn className="feature">
              <BiHeart size={18} color="#fff" />
            </FlexColumn>
          </PlayerMusicItem>
        ) : null}
      </div>
      <div className="player-action">
        <div className="icon-container">
          <BiVolumeFull size={18} />
        </div>
        <div className={`icon-container ${loop ? 'active' : ''}`} onClick={handleRepeat}>
          <BiRepeat size={18} />
        </div>
        <div className="icon-container" onClick={handleShuffle}>
          <BiShuffle size={18} />
        </div>
        <div className="icon-container" onClick={handleTogglePlaylist}>
          <BiCaretUp size={18} />
        </div>
      </div>
      <BarPlaylistContainer $isExpand={isExpand}>{isExpand ? <BarPlaylist /> : <></>}</BarPlaylistContainer>
    </BarPlayerContainer>
  );
};

export default BarPlayer;
