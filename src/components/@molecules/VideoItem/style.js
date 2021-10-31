import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const VideoItemContainer = styled.div`
  margin: 12px;
  padding: 12px
  width: 100%;
  height: auto;
  aspect-ratio: 530/304;
  border-radius: 6px;
  & img {
    border-radius: 6px;
    width: 100%;
    height: auto;
    aspect-ratio: 530/304;
    object-fit: cover;
  }
  & div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  & ${Headings}, ${Span} {
    font-size: 12px;
    margin-bottom: 0;
  }
  & ${Span} {
    line-height: 12px;
  }
`;
