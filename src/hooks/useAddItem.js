import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddItem = ({ title, artistName, albumName, videoId, tracks, smallCoverImage }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    if (tracks) {
      dispatch(
        playerSlice.actions.addAlbumToPlayList({
          title,
          artistName,
          albumName,
          tracks,
          smallCoverImage
        }),
      );
    } else {
      dispatch(
        playerSlice.actions.addMusicToPlayList({
          title,
          artistName,
          albumName,
          videoId,
          smallCoverImage
        }),
      );
    }
  }, [title, artistName, albumName, videoId, smallCoverImage]);

  return [handler];
};

export default useAddItem;
