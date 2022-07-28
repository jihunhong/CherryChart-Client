import styled from 'styled-components';

export const AlbumCoverContainer = styled.div`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  > span {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 6px;
  }
  & img {
    border-radius: 6px;
  }
`;
