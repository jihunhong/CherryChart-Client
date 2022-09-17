import styled from 'styled-components';

export const HeartIcon = styled.span`
  margin: auto;

  & svg {
    transition: fill 0.2s ease-in-out, stroke 0.2s ease-in-out;
    fill: ${props => (props.$liked ? '#ff1150' : 'none')};
    stroke: ${props => (props.$liked ? '#ff1150' : 'var(--font-plain-color)')};
    cursor: pointer;
  }
`;
