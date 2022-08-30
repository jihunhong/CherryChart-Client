import { useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * @description player의 toggle 여부에 따라
 *              플레이리스트의 아래에 (z-index) 위치한 레이어의 스크롤을 막기위함
 */
const useScrollLock = () => {
  const isExpand = useSelector(state => state.player.isExpand);
  useEffect(() => {
    if (isExpand) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isExpand]);
};

export default useScrollLock;
