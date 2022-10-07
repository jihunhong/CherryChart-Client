import styled from 'styled-components';

export const AlbumCoverContainer = styled.div`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  > span {
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
    border-radius: 6px;
  }
  & img {
    border-radius: 6px;
  }
`;
