import { FlexColumn } from '@atoms/FlexColumn/style';
import { Span } from '@atoms/Text/style';
import styled from 'styled-components';

export const ArtistSliceItemContainer = styled(FlexColumn)`
  padding: 12px;
  a.img-link {
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
  ${Span} {
    font-weight: 600;
  }
`;
