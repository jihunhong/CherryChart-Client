import Text from '@atoms/Text';
import Title from '@atoms/Title';
import TogglePlaylistButton from '@atoms/TogglePlaylistButton';
import YoutubePlayer from '@molecules/YoutubePlayer';
import CurrentPlayList from '@organisms/CurrentPlayList';
import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { BiListPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerActionContainer, PlayerBackground, PlayerContainer, PlayerHeader } from './style';

const Player = () => {
  const { playList, isExpand } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const handleExpand = useCallback(() => {
    dispatch(playerSlice.actions.togglePlayList());
  }, []);
  const handlePip = useCallback(() => {
    const video = document.querySelector('video');
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    if (document.pictureInPictureEnabled) {
      if (video) {
        video.requestPictureInPicture();
      }
    }
  }, []);

  return (
    <PlayerContainer>
      <YoutubePlayer />
      <PlayerHeader onClick={handleExpand}>
        <Title level={3} text={'Now Playing'} />
        <Text type="secondary" text={`${playList.length} Items on the list`} />
        <TogglePlaylistButton />
      </PlayerHeader>
      <PlayerActionContainer>
        <BiListPlus size={28} />
        {/* <BsPip size={28} onClick={handlePip} /> */}
      </PlayerActionContainer>

      <PlayerBackground isExpand={isExpand}>
        {isExpand ? <CurrentPlayList /> : null}
      </PlayerBackground>
    </PlayerContainer>
  );
};

export default Player;
