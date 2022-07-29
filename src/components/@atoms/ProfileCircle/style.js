import styled from 'styled-components';

export const ProfileCircleContainer = styled.div`
  width: ${props => props.$width + 2}px;
  height: ${props => props.$height + 2}px;
  background: linear-gradient(135deg, #e3e3e3a6, #ffffff91);
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  > span,
  img {
    border-radius: 50%;
  }
`;
