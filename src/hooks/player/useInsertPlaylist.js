import { createPlaylist } from '@actions/playlistActions';
import { useCallback, useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useVideoPlaylist from './useVideoPlaylist';

const useInsertPlaylist = () => {
  const playList = useVideoPlaylist();
  const dispatch = useDispatch();
  const [excludes, setExcludes] = useState([]);

  const handleInsertPlaylist = () => {
    const items = playList.filter(el => !excludes.includes(el?.id));
    dispatch(
      createPlaylist({
        title: 'first playlist',
        description: 'this is first my playlist',
        items,
      }),
    );
  };

  const handleCheckboxs = e => {
    const { checked } = e.target;
    if (e.target.id) {
      if (!checked) {
        setExcludes([...excludes, e.target.id]);
      } else {
        setExcludes(excludes.filter(id => id !== e.target.id));
      }
    }
  };

  return [handleInsertPlaylist, handleCheckboxs];
};

export default useInsertPlaylist;
