import Title from '@atoms/Title';
import TogglePlaylistButton from '@atoms/TogglePlaylistButton';
import YoutubePlayer from '@molecules/YoutubePlayer';
import CurrentPlayList from '@organisms/CurrentPlayList';
import { BiListPlus } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import {
  Description,
  PlayerBackground,
  PlayerContainer,
  PlayerHeader,
  PlayerSaveContainer,
} from './style';

const Player = () => {
  const { playList, isExpand } = useSelector(state => state.player);

  return (
    <PlayerContainer>
      <YoutubePlayer />
      <PlayerHeader>
        <Title level={3} text={'Now Playing'} />
        <Description type="secondary">{playList.length} Items on the list</Description>
        <TogglePlaylistButton />
      </PlayerHeader>
      <PlayerSaveContainer>
        <Description type="secondary">
          <BiListPlus />
        </Description>
      </PlayerSaveContainer>

      <PlayerBackground isExpand={isExpand}>
        {isExpand ? <CurrentPlayList /> : null}
      </PlayerBackground>
    </PlayerContainer>
  );
};

export default Player;
