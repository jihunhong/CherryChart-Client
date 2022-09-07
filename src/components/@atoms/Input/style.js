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
