import { createPlaylist } from '@actions/playlistActions';
import notification from '@config/notification';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useVideoPlaylist from './useVideoPlaylist';

const useInsertPlaylist = modalToggler => {
  const [playList] = useVideoPlaylist();
  const dispatch = useDispatch();
  const [excludes, setExcludes] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleInsertPlaylist = async () => {
    try {
      const items = playList.filter(el => !excludes.includes(el?.id)).map(v => v?.id);
      const response = await dispatch(
        createPlaylist({
          title: titleRef?.current?.value,
          description: descriptionRef?.current?.value,
          items,
        }),
      ).unwrap();
      notification.success({
        message: `${response?.title} 작성 완료`,
        key: 'success-playlist-insert',
      });
      modalToggler();
    } catch (err) {
      notification.error({
        message: '플레이리스트 작성 실패',
        description: '잠시후에 다시 시도해주세요',
      });
    }
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

  return {
    handleInsertPlaylist,
    handleCheckboxs,
    titleRef,
    descriptionRef,
  };
};

export default useInsertPlaylist;
