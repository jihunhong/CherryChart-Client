import { Headings } from '@atoms/Title/style';
import { Typography } from 'antd';
import styled from 'styled-components';

export const CarouselItemContainer = styled('div')`
  display: inline-block;
  width: 100%;
  margin: auto;
  cursor: pointer;

  ${Headings} {
    margin-bottom: 0px !important;
  }
`;

export const CarouselCoverImage = styled.img`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 13px;
  object-fit: cover;
  width: 100%;
  height: 100%;

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

export const Artist = styled(Typography.Text)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
`;
