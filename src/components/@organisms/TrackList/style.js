import styled from 'styled-components';
import { smooth_render } from '@components/KeyFrames';

export const TrackListItemContainer = styled('li')`
  margin: auto auto;
  display: flex;
  background: #fff;
  animation-name: ${smooth_render};
  animation-duration: 1s;
  min-height: 5vh;

  :hover {
    transition: all 0.8s;
    box-shadow: rgb(149 157 165 / 60%) 7px 6px 24px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  :nth-last-of-type {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :nth-of-type(even) {
    background-color: #fbfbfbcf;
  }
  :nth-of-type(odd) {
    background-color: #f7f7f7;
  }
`;

export const TrackRank = styled('span')`
  margin: auto 13px auto 13px;
`;

export const TrackTitle = styled('span')`
  margin: auto 0 auto 13px;
  width: 12vw;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
