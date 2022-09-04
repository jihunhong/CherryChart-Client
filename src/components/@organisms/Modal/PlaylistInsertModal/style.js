import { PlayerMusicItemContainer } from '@molecules/PlayerMusicItem/style';
import styled from 'styled-components';

export const CustomModalHeader = styled.div``;

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
