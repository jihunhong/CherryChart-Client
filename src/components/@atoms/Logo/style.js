import styled from 'styled-components';

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  color: var(--font-plain-color);
  :hover {
    span {
      color: #000;
    }
    svg {
      fill: #000;
    }
  }

  svg {
    margin-right: 8px;
    transition: fill 0.5s ease-in-out;
  }
  span {
    font-weight: 700;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    transition: color 0.5s ease-in-out;
  }
`;
