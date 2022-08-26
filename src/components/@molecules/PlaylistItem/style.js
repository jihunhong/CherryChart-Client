import styled from 'styled-components';

export const PlaylistItemContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px;
  border-radius: 4px;
  overflow: hidden;
  width: fit-content;
  position: relative;
  :after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }
`;
