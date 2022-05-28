import styled from 'styled-components';

export const AlbumCoverContainer = styled.div`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  > span {
    box-shadow: rgb(19 18 18 / 14%) 0px 5px 12px 4px;
    border-radius: 6px;
  }
  & img {
    border-radius: 6px;
  }
`;
