import { BiListPlus } from 'react-icons/bi';
import { PlayerContainer, PlayerBackground, Title, PlayerHeader, PlayerSaveContainer, Description } from './style';
import TogglePlaylistButton from '../TogglePlaylistButton';
import CurrentPlayList from '@components/CurrentPlayList';
import { useSelector } from 'react-redux';
import YoutubePlayer from '@components/YoutubePlayer';

const Player = () => {
  const { playList, isExpand } = useSelector(state => state.player);

  return (
    <PlayerContainer>
      <YoutubePlayer />
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

      <PlayerBackground isExpand={isExpand}>{isExpand ? <CurrentPlayList /> : null}</PlayerBackground>
    </PlayerContainer>
  );
};

export default Player;
