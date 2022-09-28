import LinkHOC from '@atoms/LinkHOC';
import { Span } from '@atoms/Text/style';
import { SlideUp } from '@components/KeyFrames';
import media from '@lib/media';
import Link from 'next/link';
import styled from 'styled-components';

export const Rank = styled('span')`
  margin: auto;
`;

export const MusicListItemContainer = styled('li')`
  ${SlideUp}
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 24px;
  border-radius: 6px;
  margin: 0 -1rem;

  div[class*='flex-container'],
  a[class*='flex-container'] {
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
  }
`;

export const StyledRankDiv = styled.div`
  flex-basis: 44px;
`;

export const StyledCoverDiv = styled.div`
  flex-basis: 64px;
  cursor: pointer;
  & img {
    padding: 4px;
    border-radius: 10px;
  }
`;

export const StyledTextDiv = styled.div`
  margin: 0 1rem;
  overflow: hidden;
  a {
    width: 100%;
  }
  &.title {
    flex-basis: 290px;
    max-width: 290px;
    span {
      cursor: pointer;
      font-weight: 600;
    }
  }
  &.artist-name {
    flex-basis: 128px;
    max-width: 128px;
    span {
      color: rgba(0, 0, 0, 0.45);
      :hover {
        text-decoration: underline;
      }
    }
  }
  &.album-name {
    flex-basis: 325px;
    max-width: 325px;
  }
`;

export const StyledActionDiv = styled.div`
  &.youtube {
    margin-left: auto;
  }
  flex-basis: 80px;
  cursor: pointer;
  :hover {
    svg {
      transform: scale(1.25);
    }
  }
  svg {
    transition: transform 0.25s ease-in-out;
  }
`;

export const AlbumName = styled.span`
  margin: 1rem;
  color: rgba(0, 0, 0, 0.85);
  display: inline-block;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: text-decoration 0.25s ease-in-out;
  :hover {
    text-decoration: underline;
  }
`;

export const YoutubeIcon = styled('span')`
  margin: auto;
  display: inline-block;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);

  & svg {
    fill: #ff0000;
    cursor: pointer;
  }
`;
