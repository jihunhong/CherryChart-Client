import { AlbumCoverContainer } from '@atoms/AlbumCover/style';
import { FlexColumn } from '@atoms/FlexColumn/style';
import { PlayerMusicItemContainer } from '@molecules/PlayerMusicItem/style';
import { BiVolumeFull } from 'react-icons/bi';
import styled from 'styled-components';

/**
 * <BarPlayer /> 에서 props를 전달받아 이용된다.
 */
export const BarPlaylistContainer = styled.div`
  padding: 46px 56px 0;
  display: flex;
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--header-height) - var(--bar-player-height));
  background: #000;
  ${props =>
    props.$isExpand ? 'transform: translate3d(0,0,0);' : 'transform: translate3d(0, 100vh, 0);'}
  transition: transform 300ms cubic-bezier(0.2, 0, 0.6, 1);
  will-change: transform;
  .player-side {
    flex: 1;
  }
  .playlist-side {
    width: 36%;
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
  }
`;

// BarPlaylist
export const PlaylistSideContainer = styled.section`
  .playlist-header {
    display: grid;
    padding: 8px 4px;
    align-items: center;
    grid-auto-flow: column;

    .save-playlist {
      display: flex;
      align-items: center;
      svg {
        margin-right: 4px;
      }
    }
  }

  div.grid {
    display: grid;
    grid-auto-flow: row;
    ${PlayerMusicItemContainer} {
      padding: 0 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      h5[class*='typography'] {
        font-size: 14px;
      }
      &.active {
        background-color: var(--dark-gray);
        ${AlbumCoverContainer} {
          position: relative;
          :after {
            position: absolute;
            background: rgba(0, 0, 0, 0.7);
            top: 0;
            left: 0;
            width: inherit;
            height: inherit;
            border-radius: 4px;
          }
        }
      }
      a {
        pointer-events: none;
      }
      span {
        font-size: 12px;
      }
      ${FlexColumn} {
        cursor: move;
      }
      ${AlbumCoverContainer} {
        cursor: pointer;
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
        & span,
        img {
          border-radius: 4px;
        }
      }
    }
  }
`;
