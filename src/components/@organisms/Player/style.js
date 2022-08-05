import { Headings } from '@atoms/Title/style';
import { playlistRenderAnim } from '@components/KeyFrames';
import styled from 'styled-components';

export const PlayerContainer = styled('div')`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 400px;
  height: max-content;
  z-index: 9000;

  & iframe {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }

  & .draggable-container {
    width: 48px;
    height: 48px;
    position: absolute;
    top: -48px;
    right: -1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & ${Headings} {
    margin-bottom: 0px;
  }
`;
export const PlayerHeader = styled('div')`
  padding: 14px;
  border: 1px solid rgba(149, 157, 165, 0.2);
  background: #fff;
  border-bottom: 0px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const PlayerActionContainer = styled('div')`
  padding-top: 14px;
  padding-left: 14px;
  padding-bottom: 9px;
  border: 1px solid rgba(149, 157, 165, 0.2);
  background: #fff;
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  justify-content: start;
  svg {
    cursor: pointer;
  }
`;
export const PlayerBackground = styled('div')`
  display: flex;
  background: #fff;
  border: 1px solid rgba(149, 157, 165, 0.2);
  border-top: 0px solid;

  max-height: 200px;
  animation-name: ${playlistRenderAnim};
  animation-duration: 0.1s;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
`;
export const PlayListItemTitle = styled('div')``;
