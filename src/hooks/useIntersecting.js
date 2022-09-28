import { useDebugValue, useEffect } from 'react';
import useToggle from './util/useToggle';

/**
 * @param rootMargin: bottom barplayer pixel
 *
 */

const useIntersecting = (ref, rootMargin = '0px 0px -62px 0px') => {
  const [visible, toggle] = useToggle(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, ob) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            toggle();
            ob.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin,
      },
    );
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  useDebugValue([visible]);
  return [visible];
};
export default useIntersecting;
