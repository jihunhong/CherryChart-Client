import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useToggle from './util/useToggle';

const useArtistPagination = () => {
  const artistList = useSelector(state => state.artist.artistList);
  const [currentIndex, setIndex] = useState(0);
  const [clicked, toggle] = useToggle(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === 2) {
        setIndex(0);
      } else {
        setIndex(i => i + 1);
      }
    }, 3500);
    if (clicked) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentIndex, clicked]);

  const onChange = e => {
    toggle();
    if (e.target.dataset.index) {
      setIndex(parseInt(e.target.dataset.index, 10));
    }
  };

  return [artistList[currentIndex].music?.artist, onChange, currentIndex];
};

export default useArtistPagination;
