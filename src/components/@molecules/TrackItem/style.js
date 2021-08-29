import { smooth_render } from '@components/KeyFrames';
import styled from 'styled-components';

export const TrackListItemContainer = styled('li')`
  margin: auto auto;
  display: flex;
  animation-name: ${smooth_render};
  animation-duration: 1s;
  min-height: 5vh;

  :hover {
    transition: all 0.8s;
    box-shadow: rgb(149 157 165 / 60%) 2px 3px 6px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  :nth-last-of-type(1) {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :nth-of-type(even) {
  }
  :nth-of-type(odd) {
    background-color: rgb(0 0 0 / 2%);
  }

  & .rank {
    margin: auto 13px auto 13px;
  }
  & .title {
    margin: auto 0 auto 13px;
    width: 12vw;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
