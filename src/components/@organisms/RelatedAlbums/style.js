import { CarouselCoverImage, CarouselItemContainer } from '@molecules/CarouselItem/style';
import styled from 'styled-components';

export const RelatedAlbumsContainer = styled.section`
  ${CarouselItemContainer} {
    > a,
    ${CarouselCoverImage} {
      width: inherit;
      height: inherit;
    }
  }
`;
