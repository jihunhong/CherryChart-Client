import useInput from '@hooks/useInput';
import { forwardRef } from 'react';
import { StyledInput } from './style';

const Input = ({ ...props }, ref) => {
  const [value, handler] = useInput();
  return <StyledInput {...props} ref={ref} value={value} onChange={handler} />;
};

export default forwardRef(Input);
