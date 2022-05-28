import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddAlbum = ({ albumName, tracks, artistName, videoId, smallCoverImage }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(
      playerSlice.actions.addAlbumToPlayList({
        albumName,
        tracks,
        artistName,
        smallCoverImage
      }),
    );
  }, [albumName, tracks, artistName, smallCoverImage]);

  return [handler];
};
export default useAddAlbum;
