import { useEffect, useRef } from 'react';

const useMounted = () => {
  const renderRef = useRef(true);

  useEffect(() => {
    renderRef.current = false;
  }, []);

  return renderRef.current;
};

export default useMounted;
