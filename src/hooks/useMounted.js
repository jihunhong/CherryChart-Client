import { useEffect, useRef } from 'react';

const useMounted = () => {
  const renderRef = useRef(false);

  useEffect(() => {
    renderRef.current = true;
  }, []);

  return renderRef.current;
};

export default useMounted;
