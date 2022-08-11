import { useCallback, useState } from 'react';

const useToggle = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback(
    e => {
      setValue(!value);
    },
    [value],
  );

  return [value, handler, setValue];
};

export default useToggle;
