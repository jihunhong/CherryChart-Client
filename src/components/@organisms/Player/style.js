import { Headings } from '@atoms/Title/style';
import { horizontal_render } from '@components/KeyFrames';
import styled from 'styled-components';

export const PlayerContainer = styled('div')`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 1vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 30%;
  transition: 0.5s;
  z-index: 9000;

  & iframe {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
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

  height: ${props => (props.isExpand ? '25.5vh' : '0vh')};
  animation-name: ${horizontal_render};
  animation-duration: 1s;
  animation-direction: ${props => (props.isExpand ? 'reverse' : 'normal')};
  transition: 0.3s;
`;
export const PlayListItemTitle = styled('div')``;
