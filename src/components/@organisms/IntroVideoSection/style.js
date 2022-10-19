import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const LetterBox = styled.section`
  z-index: 2;
  margin: auto;
  width: 90%;
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Headings}, ${Span}, a {
    text-align: left;
    color: #fff;
    padding: 3px 0;
    text-transform: uppercase;
    font-weight: 800;
    display: inline-block;
    margin-bottom: 5px;
    text-shadow: none;
  }

  .site-title {
    font-size: 52px;
    margin-bottom: 0px;
  }

  .site-describe {
    margin-bottom: 3px;
  }

  .owner-link {
    & svg {
      margin-left: 8px;
      vertical-align: middle;
    }
  }
`;

export const IntroSectionContainer = styled.section`
  > div {
    display: flex;
    position: relative;
    height: auto;
    aspect-ratio: 2293/740;
    border-radius: 14px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const VideoWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: auto;
  overflow: hidden;
  aspect-ratio: 2293/740;
  border-radius: 14px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    background: rgb(252 253 254 / 35%);

    z-index: 1;
  }

  > div {
    display: flex;
    align-items: center;
    height: 100%;

    & iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }
  }
`;
