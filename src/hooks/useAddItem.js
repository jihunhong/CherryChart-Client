import playerSlice from '@reducers/player';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAddItem = ({
  id,
  title,
  artistName,
  albumName,
  videoId,
  tracks,
  smallCoverImage,
  albumId,
}) => {
  const dispatch = useDispatch();
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
    dispatch(playerSlice.actions.switchPlay(true));
  }, [id, title, artistName, albumName, videoId, smallCoverImage, albumId, tracks]);

  return [handler];
};

export default useAddItem;
