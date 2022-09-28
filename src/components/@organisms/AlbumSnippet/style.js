import { AlbumCoverContainer } from '@atoms/AlbumCover/style';
import { Button } from 'antd';
import styled from 'styled-components';

export const PlayButton = styled(Button)`
  border-radius: 6px;
  border: none;
`;

export const AlbumInfoHeader = styled.section`
  display: grid;
  grid-template-columns: 270px auto;
  column-gap: 12px;
  align-items: center;

  ${AlbumCoverContainer} {
    position: relative;
    cursor: pointer;
    :hover {
      :after {
        transform: translateY(0%);
      }
    }
    :after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 120%;
      content: '';
      background: linear-gradient(
        226deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
      );
      transform: translateY(-16%);
      will-change: transform;
      transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
    }
  }

  .sight {
    height: -webkit-fill-available;
  }

  .info {
    padding-inline-start: 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    position: relative;
    > h2.album-name {
      margin: 0;
      align-items: baseline;
    }
    > h3.artist-name {
      margin-top: 0;
      margin-bottom: 14px;
      text-shadow: none;
    }
  }

  & .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    font-style: italic;
  }

  & .release-date {
    margin-top: 8px;
  }

  & button {
    margin-top: 14px;
  }
`;
