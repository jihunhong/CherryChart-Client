import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddItem = ({ title, artistName, albumName, videoId, tracks }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    if (tracks) {
      dispatch(
        playerSlice.actions.addAlbumToPlayList({
          title,
          artistName,
          albumName,
          tracks,
        }),
      );
    } else {
      dispatch(
        playerSlice.actions.addMusicToPlayList({
          title,
          artistName,
          albumName,
          videoId,
        }),
      );
    }
  }, [title, artistName, albumName, videoId]);

  return [handler];
};

export default useAddItem;
