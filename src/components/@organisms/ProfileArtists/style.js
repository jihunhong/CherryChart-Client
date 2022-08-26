import { FlexColumn } from '@atoms/FlexColumn/style';
import styled from 'styled-components';

export const ArtistCircle = styled(FlexColumn)`
  .radius-cover {
    border-radius: 50%;
    background: #fff;
    box-shadow: rgb(0 0 0 / 15%) 0px 1px 3px;
  }
  span {
    color: var(--font-plain-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
`;
