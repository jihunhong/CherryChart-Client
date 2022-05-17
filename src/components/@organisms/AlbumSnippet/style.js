import { Button } from 'antd';
import styled from 'styled-components';

export const PlayButton = styled(Button)`
  border-radius: 6px;
  background-color: #d60017;
  :hover {
    background-color: #ec2b40;
  }
  border: none;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: #fff;
      stroke: #fff;
      margin: 0;
    }
    span {
      color: #fff;
    }
  }
`;

export const AlbumInfoHeader = styled.section`
  display: grid;
  grid-template-columns: 270px auto;
  column-gap: 12px;
  align-items: center;

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
      color: #fa586a;
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
