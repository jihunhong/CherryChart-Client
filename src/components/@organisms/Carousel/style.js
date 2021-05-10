import styled, { createGlobalStyle } from 'styled-components';
import { Typography } from 'antd';

export const CarouselGlobalStyle = createGlobalStyle`
    ul.react-multi-carousel-track > li {
        margin-right : 15px;
    }
`;

export const CarouselContainer = styled('section')`
  margin: 5vh auto;
`;

export const Title = styled(Typography.Title)`
  margin-bottom: 0 !important;
  color: #262f57 !important;
`;

export const Text = styled(Typography.Text)`
  display: inline-block;
  margin-bottom: 3vh;
  color: #262f57 !important;
`;
