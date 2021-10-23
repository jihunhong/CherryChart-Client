import { Typography } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const CarouselGlobalStyle = createGlobalStyle`
    ul.react-multi-carousel-track > li {
        margin-right : 15px;
    }
`;

export const CarouselContainer = styled.section``;

export const Title = styled(Typography.Title)`
  margin-bottom: 0 !important;
  color: #262f57 !important;
`;

export const Text = styled(Typography.Text)`
  display: inline-block;
  margin-bottom: 3vh;
  color: #262f57 !important;
`;

export const TrackAddIcon = styled.span`
  margin: auto 3vw auto auto;
  width: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);

  & svg {
    fill: #ff0000;
    cursor: pointer;
  }
`;
