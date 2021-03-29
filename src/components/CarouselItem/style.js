import styled from 'styled-components';
import { Typography } from 'antd';
import { smooth_render } from '../KeyFrames';

export const CarouselItemContainer = styled('div')`
  display: inline-block;
  margin: auto 2vw auto auto;
  animation-name: ${smooth_render};
  animation-duration: 2s;
`;

export const CarouselCoverImage = styled('div')`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 13px;
  background-image: url('${props => props.background}');
  background-size: cover;
  width: 282px;
  height: 282px;

  :after {
    transform: scale(0.9) translateY(15px);
    filter: blur(10px);
    opacity: 0.9;
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: inherit;
    background-size: cover;
    z-index: -1;
    transition: filter 0.3s ease;
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: 0px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Artist = styled(Typography.Text)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
`;
