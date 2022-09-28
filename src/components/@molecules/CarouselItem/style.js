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
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      226deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 35%,
      rgba(255, 255, 255, 0.2) 42%,
      rgba(255, 255, 255, 0) 60%
    );
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
