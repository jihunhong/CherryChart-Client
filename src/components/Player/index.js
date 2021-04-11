import YouTube from 'react-youtube';
import { BiListPlus } from 'react-icons/bi';
import { PlayerContainer, PlayerBackground, Title, PlayerHeader, PlayerSaveContainer, Description } from './style';
import TogglePlaylistButton from '../TogglePlaylistButton';
import CurrentPlayList from '@components/CurrentPlayList';
import { useSelector } from 'react-redux';

const Player = () => {
  const { playList, isExpand, selectedIndex } = useSelector(state => state.player);

  return (
    <PlayerContainer>
      {playList.length ? <YouTube width="420" videoId={playList[selectedIndex]?.videoId} /> : null}
      <PlayerHeader>
        <Title level={3}>Now Playing</Title>
        <Description type="secondary">{playList.length} Items on the list</Description>
        <TogglePlaylistButton />
      </PlayerHeader>
      <PlayerSaveContainer>
        <Description type="secondary">
          <BiListPlus />
        </Description>
      </PlayerSaveContainer>

      {isExpand ? (
        <PlayerBackground>
          <CurrentPlayList />
        </PlayerBackground>
      ) : null}
    </PlayerContainer>
  );
};

export default Player;
