import useInput from '@hooks/useInput';
import { forwardRef } from 'react';
import { InputContainer, StyledInput } from './style';

const Input = ({ border = true, ...props }, ref) => {
  const [value, handler] = useInput();
  if (border) {
    return (
      <InputContainer className={props?.className}>
        <StyledInput {...props} ref={ref} value={value} onChange={handler} />
      </InputContainer>
    );
  }
  return <StyledInput {...props} ref={ref} value={value} onChange={handler} />;
};

export default forwardRef(Input);
