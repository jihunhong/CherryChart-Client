import { CarouselCoverImage, CarouselItemContainer } from '@molecules/CarouselItem/style';
import styled from 'styled-components';

export const RelatedAlbumsContainer = styled.section`
  ${CarouselItemContainer} {
    width: 141px;
    height: 141px;
    > a,
    ${CarouselCoverImage} {
      width: inherit;
      height: inherit;
    }
  }
`;
