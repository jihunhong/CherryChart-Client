import { Span } from '@atoms/Text/style';
import styled from 'styled-components';
import { smooth_render } from '../../KeyFrames';

export const Rank = styled('span')`
  margin: auto 0 auto 1.5vw;
`;

export const CoverImageContainer = styled('div')`
  margin: auto 1.5vw;
  cursor: pointer;
  & img {
    padding: 4px;
    border-radius: 10px;
  }
`;

export const MusicListItemContainer = styled('li')`
  margin: 1.5vh auto;
  display: flex;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 24px;
  border-radius: 6px;
  animation-name: ${smooth_render};
  animation-duration: 1s;

  ${Span}.title {
    width: 12vw;
    cursor: pointer;
  }
  ${Span}.artist-name {
    width: 10vw;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
  }
  ${Span} {
    margin: auto 1.5vw;
    display: inline-block;
  }

  :hover {
    transition: all 0.8s;
    box-shadow: rgb(149 157 165 / 60%) 2px 3px 6px;
  }
`;

export const AlbumName = styled('span')`
  margin: auto 0;
  width: 10vw;
  display: inline-block;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const YoutubeIcon = styled('span')`
  margin: auto auto auto 15vw;
  width: 4vw;
  display: inline-block;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);

  & svg {
    fill: #ff0000;
    cursor: pointer;
  }
`;

export const HeartIcon = styled('span')`
  margin: auto 4vw auto auto;

  & svg {
    cursor: pointer;
  }
`;
