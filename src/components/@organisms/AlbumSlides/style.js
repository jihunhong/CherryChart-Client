import { SlideUp } from '@components/KeyFrames';
import styled from 'styled-components';

export const AlbumSlidesContainer = styled.section`
  ${SlideUp}
  overflow-y: hidden;
  .ant-row {
    flex-wrap: nowrap;
    width: 100%;
    overflow: hidden;
    margin-left: -12px;
    margin-right: -12px;
    > img {
      margin-left: 12px;
      margin-right: 12px;
      width: calc(100% / 5);
      height: auto;
      aspect-ratio: 1/1;
    }
  }
`;
