import { horizontal_render } from '@components/KeyFrames';
import { Typography } from 'antd';
import styled from 'styled-components';

export const PlayerContainer = styled('div')`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 1vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 30%;
  transition: 0.5s;

  & iframe {
    width: 100%;
  }
`;
export const PlayerHeader = styled('div')`
  padding: 14px;
  border: 1px solid rgba(149, 157, 165, 0.2);
  background: #fff !important;
  border-bottom: 0px;
  cursor: pointer;
`;

export const Title = styled(Typography.Title)`
  margin-bottom: 0px !important;
`;

export const Description = styled(Typography.Text)``;

export const PlayerSaveContainer = styled('div')`
  padding-top: 14px;
  padding-left: 14px;
  padding-bottom: 9px;
  border: 1px solid rgba(149, 157, 165, 0.2);
  background: #fff !important;
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
