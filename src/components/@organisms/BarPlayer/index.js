import { FlexColumn } from '@atoms/FlexColumn/style';
import useCurrent from '@hooks/player/useCurrent';
import usePlayerChange from '@hooks/player/usePlayerChange';
import PlayControls from '@molecules/PlayControls';
import PlayerControls from '@molecules/PlayerControls';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import YoutubePlayer from '@molecules/YoutubePlayer';
import { BarPlaylistContainer } from '@organisms/BarPlaylist/style';
import dynamic from 'next/dynamic';
import { BiHeart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { BarPlayerContainer } from './style';

const BarPlaylist = dynamic(() => import('@organisms/BarPlaylist'), {
  ssr: false,
});

const BarPlayer = () => {
  const [currentMusic] = useCurrent();
  const { onStateChange } = usePlayerChange();
  const isExpand = useSelector(state => state.player.isExpand);

  return (
    <BarPlayerContainer>
      <YoutubePlayer onStateChange={onStateChange} />
      <div className="player-action">
        <PlayControls />
      </div>
      <div className="played-info">
        {currentMusic ? (
          <PlayerMusicItem {...currentMusic}>
            <FlexColumn className="feature">
              <BiHeart size={18} color="#fff" />
            </FlexColumn>
          </PlayerMusicItem>
        ) : null}
      </div>
      <div className="player-action">
        <PlayerControls />
      </div>
      <BarPlaylistContainer $isExpand={isExpand}>
        {isExpand ? <BarPlaylist /> : <></>}
      </BarPlaylistContainer>
    </BarPlayerContainer>
  );
};

export default BarPlayer;
