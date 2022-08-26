import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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
