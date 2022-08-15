import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAddItem = ({ id, title, artistName, albumName, videoId, tracks, smallCoverImage, albumId }) => {
  const dispatch = useDispatch();
  const playList = useSelector(state => state.player.playList);
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const handler = useCallback(() => {
    if (tracks) {
      dispatch(
        playerSlice.actions.addAlbumToPlayList({
          id,
          title,
          artistName,
          albumId,
          albumName,
          tracks,
          smallCoverImage,
        }),
      );
    } else {
      // if (window.YTPlayer) {
      //   if (playList.length) {
      //     window.YTPlayer.cuePlaylist(videoId);
      //   } else {
      //     window.YTPlayer.cuePlaylist([videoId]);
      //   }
      //   if (window.YTPlayer.getPlayerState() !== 1) {
      //     window.YTPlayer.playVideoAt(selectedIndex);
      //   }
      // }
      dispatch(
        playerSlice.actions.addMusicToPlayList({
          id,
          title,
          artistName,
          albumId,
          albumName,
          videoId,
          smallCoverImage,
        }),
      );
    }
  }, [id, title, artistName, albumName, videoId, smallCoverImage, albumId, tracks]);

  return [handler];
};

export default useAddItem;
