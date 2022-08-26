import { AlbumCoverContainer } from '@atoms/AlbumCover/style';
import { FlexColumn } from '@atoms/FlexColumn/style';
import styled from 'styled-components';

export const PlayerMusicItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  ${AlbumCoverContainer} {
    flex: 0 0 46px;
  }
  ${FlexColumn}.meta {
    width: 0;
    flex: 1 1 calc(280px - 12px - 46px - 32px);
    margin: 0 12px;
    a {
      width: 100%;
    }
  }
  ${FlexColumn}.feature {
    width: 0;
    flex: 0 0 32px;
    align-items: center;
  }
  & *[class*='typography'] {
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .typography-text {
    color: #909090;
    font-weight: 400;
  }
`;
