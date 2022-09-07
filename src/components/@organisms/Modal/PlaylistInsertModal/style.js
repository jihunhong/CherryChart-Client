import { PlayerMusicItemContainer } from '@molecules/PlayerMusicItem/style';
import styled from 'styled-components';

export const InsertModalHeader = styled.div`
  .grid-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 120px 1fr;
    grid-column-gap: 24px;
  }
  .playlist-thumbnail {
    width: 120px;
    height: 120px;
    padding: 12px;
    background: var(--gray-color);
    border-radius: 14px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .playlist-inputs {
    display: flex;
    justify-content: end;
    flex-direction: column;

    .input-container {
      width: 100%;
      position: relative;
      border-bottom: var(--light-gray-color) 1px solid;
      &:after {
        position: absolute;
        left: 0;
        top: 1px;
        content: '';
        width: 100%;
        height: 100%;
        transition: transform 0.25s;
        transform: scaleX(0);
      }
      &:focus-within {
        :after {
          border-bottom: var(--primary-color) 2px solid;
          transform: scale(1);
        }
      }
    }
    input.description {
      margin-top: 8px;
    }
  }
`;

export const PlaylistInsertModalBody = styled.div`
  overflow-y: scroll;
  max-height: 740px;

  div.grid {
    max-height: 480px;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 6px;
  }

  article.grid-item {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 16px 1fr;
    grid-column-gap: 8px;
    align-items: center;
    ${PlayerMusicItemContainer} {
      cursor: pointer;
      h5 {
        color: #000;
      }
      a {
        pointer-events: none;
      }
    }
  }
`;
