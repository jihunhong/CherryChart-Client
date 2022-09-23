import { useDebugValue, useEffect } from 'react';
import useToggle from './util/useToggle';

const useIntersecting = ref => {
  const [visible, toggle] = useToggle(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          toggle();
          ob.unobserve(entry.target);
        }
      });
    }, {});
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return [visible];
};
export default useIntersecting;
