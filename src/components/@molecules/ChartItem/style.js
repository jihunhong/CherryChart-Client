import { Span } from '@atoms/Text/style';
import media from '@lib/media';
import styled from 'styled-components';

export const Rank = styled('span')`
  margin: auto 0 auto 28px;
`;

export const CoverImageContainer = styled('div')`
  margin: auto;
  cursor: pointer;
  & img {
    padding: 4px;
    border-radius: 10px;
  }
`;

export const MusicListItemContainer = styled('li')`
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-column-gap: 1em;
  grid-template-columns: 54px 64px 328px 222px 262px auto 130px 130px;
  ${media.desktop`
    grid-template-columns: 54px 64px 268px 222px 262px auto 80px 80px;
  `}
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 24px;
  border-radius: 6px;
  transition: transform 0.1s ease-in-out;

  div[class*='flex-container'],
  a[class*='flex-container'] {
    display: flex;
    align-items: center;
  }

  div[class*='action-container'] {
    cursor: pointer;
    svg {
      transition: transform 0.25s ease-in-out;
      :hover {
        transform: scale(1.5);
      }
    }
  }

  a {
    ${Span} {
      color: var(--font-plain-color);
      margin: auto 1rem;
    }
  }

  ${Span}.title {
    cursor: pointer;
  }
  ${Span}.artist-name {
    color: rgba(0, 0, 0, 0.45);
    margin: auto 1.4rem;
    transition: text-decoration 0.25s ease-in-out;
    :hover {
      text-decoration: underline;
    }
  }

  :hover {
    transform: scale(1.03);
  }
`;

export const AlbumName = styled('span')`
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
