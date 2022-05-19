import styled from 'styled-components';

export const AlbumSlidesContainer = styled.section`
  overflow-y: hidden;
  .ant-row {
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: hidden;
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
