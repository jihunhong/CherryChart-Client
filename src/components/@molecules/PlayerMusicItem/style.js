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
    > span {
      box-shadow: none;
    }
  }
  ${FlexColumn}.meta {
    width: 0;

    --container-width: 280px;
    --column-gap-width: 12px;
    --album-cover-width: 46px;
    --favorite-width: 32px;

    flex: 1 1
      calc(
        var(--container-width) - var(--column-gap-width) - var(--album-cover-width) -
          var(--favorite-width)
      );
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
  .actions {
    opacity: 0;
    transition: opacity 0.2s;
  }

  :hover {
    .actions {
      opacity: 1;
    }
  }
`;
