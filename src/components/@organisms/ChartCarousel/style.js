import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import styled, { createGlobalStyle } from 'styled-components';

export const CarouselGlobalStyle = createGlobalStyle`
    ul.react-multi-carousel-track > li {
        margin-right : 15px;
    }
`;

export const ChartCarouselContainer = styled.section`
  & ${Headings} {
    margin-bottom: 0;
  }

  & ${Span} {
    display: inline-block;
    margin-bottom: 28px;
  }
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
