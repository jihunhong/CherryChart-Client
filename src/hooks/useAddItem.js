import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddItem = ({ title, artist, album, videoId, tracks }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    if (tracks) {
      dispatch(
        playerSlice.actions.addAlbumToPlayList({
          title,
          artist,
          album,
          tracks,
        }),
      );
    } else {
      dispatch(
        playerSlice.actions.addMusicToPlayList({
          title,
          artist,
          album,
          videoId,
        }),
      );
    }
  }, [title, artist, album, videoId]);

  return [handler];
};

export default useAddItem;
