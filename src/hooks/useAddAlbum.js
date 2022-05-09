import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddAlbum = ({ albumName, tracks, artistName, videoId }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(
      playerSlice.actions.addAlbumToPlayList({
        albumName,
        tracks,
        artistName,
      }),
    );
  }, [albumName, tracks, artistName]);

  return [handler];
};
export default useAddAlbum;
