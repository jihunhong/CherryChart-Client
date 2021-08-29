import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddAlbum = ({ album, tracks, artist }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(
      playerSlice.actions.addAlbumToPlayList({
        album,
        tracks,
        artist,
      }),
    );
  }, [album, tracks]);

  return [handler];
};
export default useAddAlbum;
