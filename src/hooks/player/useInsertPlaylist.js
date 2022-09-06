import { createPlaylist } from '@actions/playlistActions';
import useInput from '@hooks/useInput';
import { useDebugValue, useState } from 'react';
import { useDispatch } from 'react-redux';
import useVideoPlaylist from './useVideoPlaylist';

const useInsertPlaylist = () => {
  const [playList] = useVideoPlaylist();
  const dispatch = useDispatch();
  const [excludes, setExcludes] = useState([]);
  const [title, onChangeTitle] = useInput('Title');
  const [description, onChangeDescription] = useInput('Description');
  useDebugValue([title, description]);

  const handleInsertPlaylist = () => {
    const items = playList.filter(el => !excludes.includes(el?.id)).map(v => v?.id);
    dispatch(
      createPlaylist({
        title,
        description,
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

  return { handleInsertPlaylist, handleCheckboxs, onChangeTitle, onChangeDescription };
};

export default useInsertPlaylist;
