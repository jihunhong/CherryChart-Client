import { AlbumCoverContainer } from '@atoms/AlbumCover/style';
import { FlexColumn } from '@atoms/FlexColumn/style';
import styled from 'styled-components';

export const BarPlayerContainer = styled.div`
  .youtube-container {
    position: absolute;
    bottom: 74px;
    left: 13px;
    width: 480px;
    height: 270px;
    & iframe {
      width: 480px;
      height: 270px;
    }
  }
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 62px;
  background-color: #16151a;
  display: grid;
  align-items: center;
  grid-template-columns: 0fr 1fr 0fr;
  padding: 0 8px;
  z-index: 9000;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  }

  > .played-info,
  .player-action {
    display: flex;
    align-items: center;
    z-index: 1000;
  }

  .played-info {
    width: 280px;
    margin: 0 auto;
    flex-wrap: nowrap;
    overflow: hidden;
    ${AlbumCoverContainer} {
      flex: 0 0 38px;
    }
    ${FlexColumn} {
      width: 0;
      flex: 1 1 calc(280px - 16px - 38px);
      margin: 0 16px;
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
  }

  .player-action {
    .icon-container {
      margin: 0 12px;
      cursor: pointer;
      svg {
        opacity: 0.5;
        vertical-align: middle;
        color: #fff;
        transition: opacity 0.3s;
      }
      :hover {
        svg {
          opacity: 1;
        }
      }
    }
  }
`;
