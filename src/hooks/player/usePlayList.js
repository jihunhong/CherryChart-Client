import videoIdMapping from '@lib/videoIdMapping';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePlayList = () => {
  const playList = useSelector(state => state.player.playList);
  const [storageList, setStorageList] = useState([]);
  // persist된 playList로부터 불러오기.
  useEffect(() => {
    if (playList.length) {
      setStorageList(playList.map(videoIdMapping).join(','));
    }
  }, []);

  useEffect(() => {
    if (storageList?.length === 0 && playList.length) {
      setStorageList(playList.map(videoIdMapping).join(','));
    }
  }, [storageList, playList]);

  return [storageList, playList.map(videoIdMapping)];
};

export default usePlayList;
