import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  ::placeholder {
    color: var(--font-gray-color);
    font-style: italic;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  border-bottom: var(--light-gray-color) 1px solid;
  &:after {
    position: absolute;
    left: 0;
    top: 1px;
    content: '';
    width: 100%;
    height: 100%;
    transition: transform 0.25s;
    transform: scaleX(0);
  }
  &:focus-within {
    :after {
      border-bottom: var(--primary-color) 2px solid;
      transform: scale(1);
    }
  }
`;
