import styled from 'styled-components';
import { smooth_render } from '../KeyFrames';

export const PlayListItemsContainer = styled('ul')`
  width: 100%;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 24px;
  animation-name: ${smooth_render};
  animation-duration: 1s;
  padding: 4px 6px;
  overflow: scroll;
`;

export const PlayListItem = styled('li')`
  display: flex;
  padding: 6px 2px;
  padding-bottom: 6px;
  border-bottom: 1px solid;
  border-color: rgb(0 0 0 / 10%);

  :hover {
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const PlayListItemCover = styled('div')`
  float: left;
  margin: auto 0.5vw auto 0;
  & img {
    padding: 2px;
    border-radius: 6px;
  }
`;

export const PlayListDivision = styled('div')`
  margin: auto 0;
`;

export const PlayListItemTitle = styled('h4')`
  margin: auto 0;
  font-weight: 500;
`;
export const PlayListItemArtist = styled('p')`
  margin: auto 0;
  font-weight: 500;
`;
