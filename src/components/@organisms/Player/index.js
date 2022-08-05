import { createPlaylist } from '@actions/playlistActions';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import TogglePlaylistButton from '@atoms/TogglePlaylistButton';
import useDraggable from '@hooks/player/useDraggable';
import YoutubePlayer from '@molecules/YoutubePlayer';
import CurrentPlayList from '@organisms/CurrentPlayList';
import playerSlice from '@reducers/player';
import { useCallback, useRef } from 'react';
import { BiListPlus } from 'react-icons/bi';
import { BsArrowsMove } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerActionContainer, PlayerBackground, PlayerContainer, PlayerHeader } from './style';

const Player = () => {
  const { playList, isExpand } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const handleExpand = useCallback(() => {
    dispatch(playerSlice.actions.togglePlayList());
  }, []);
  const handleInsertPlaylist = useCallback(() => {
    const items = playList.map(el => el.id);
    dispatch(
      createPlaylist({
        // sample request
        title: 'first playlist',
        description: 'this is first my playlist',
        items,
      }),
    );
  }, [playList]);

  return (
    <PlayerContainer>
      <YoutubePlayer />
      <PlayerHeader onClick={handleExpand}>
        <Title level={3} text="Now Playing" />
        <Text type="secondary" text={`${playList.length} Items on the list`} />
        <TogglePlaylistButton />
      </PlayerHeader>
      <PlayerActionContainer>
        <BiListPlus size={28} onClick={handleInsertPlaylist} />
      </PlayerActionContainer>

      {isExpand ? (
        <PlayerBackground isExpand={isExpand}>
          <CurrentPlayList />
        </PlayerBackground>
      ) : null}
    </PlayerContainer>
  );
};

export default Player;
