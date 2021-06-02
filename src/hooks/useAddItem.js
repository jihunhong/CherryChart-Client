import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default ({ title, artist, album, videoId }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(
      playerSlice.actions.addMusicToPlayList({
        title,
        artist,
        album,
        videoId,
      }),
    );
  }, [title, artist, album, videoId]);

  return [handler];
};
