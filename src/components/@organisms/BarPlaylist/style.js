import { AlbumCoverContainer } from '@atoms/AlbumCover/style';
import { FlexColumn } from '@atoms/FlexColumn/style';
import { SliderContainer } from '@atoms/Slider/style';
import { TabNavs, TabsContainer } from '@atoms/Tabs/style';
import { PlayerMusicItemContainer } from '@molecules/PlayerMusicItem/style';
import PlaylistItem from '@molecules/PlaylistItem';
import { PlaylistItemContainer } from '@molecules/PlaylistItem/style';
import { ProfilePlaylistsContainer } from '@organisms/ProfilePlaylists/style';
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
  transition: transform .3s cubic-bezier(0.2, 0, 0.6, 1);
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
    padding: 8px 0px;
    align-items: center;
    grid-auto-flow: column;

    .save-playlist {
      display: flex;
      align-items: center;
      button {
        padding: 4px 0;
        border: none;
      }
      svg {
        margin-right: 0.8rem;
      }
    }
  }

  ${TabsContainer} {
    padding: 8px 4px;
    ${TabNavs} {
      margin: 0 -1rem;
    }
  }

  div.song-grid {
    display: grid;
    grid-auto-flow: row;
    ${PlayerMusicItemContainer} {
      transition: background 0.3s;
      padding: 0 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      h5[class*='typography'] {
        font-size: 14px;
      }

      &.active {
        background: rgb(128 128 128 / 40%);
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

export const PlaylistGrid = styled.div`
  ${ProfilePlaylistsContainer} {
    h4 {
      color: #fff;
    }
    ${SliderContainer} {
      ul.list {
        grid-auto-columns: ${(100 / 6).toFixed(2)}%;
      }
    }
  }
  ${PlaylistItemContainer} {
    .thumb-container {
      margin: 0;
    }
    .meta {
      display: none;
    }
  }
`;
