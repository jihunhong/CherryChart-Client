import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddItem = ({ id, title, artistName, albumName, videoId, tracks, smallCoverImage }) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    if (tracks) {
      dispatch(
        playerSlice.actions.addAlbumToPlayList({
          id,
          title,
          artistName,
          albumName,
          tracks,
          smallCoverImage,
        }),
      );
    } else {
      dispatch(
        playerSlice.actions.addMusicToPlayList({
          id,
          title,
          artistName,
          albumName,
          videoId,
          smallCoverImage,
        }),
      );
    }
  }, [id, title, artistName, albumName, videoId, smallCoverImage, tracks]);

  return [handler];
};

export default useAddItem;
