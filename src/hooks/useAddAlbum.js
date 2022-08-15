import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddAlbum = ({ albumName, tracks, artistName, albumId, smallCoverImage }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(
      playerSlice.actions.addAlbumToPlayList({
        artistName,
        albumId,
        albumName,
        tracks,
        smallCoverImage,
      }),
    );
  }, [albumName, tracks, artistName, albumId, smallCoverImage]);

  return [handler];
};
export default useAddAlbum;
