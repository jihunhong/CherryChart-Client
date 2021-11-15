import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const LetterBox = styled.section`
  z-index: 101;
  margin: auto;
  width: 1900px;
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
  display: flex;
  position: relative;
  height: auto;
  aspect-ratio: 2293/740;
  border-radius: 14px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const VideoWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 100;
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
    background: linear-gradient(
      180deg,
      rgb(252 253 254) 0%,
      rgba(255, 255, 255, 1) 5%,
      rgba(255, 255, 255, 0) 16%
    );
    background-image: linear-gradient(90deg, rgb(0 219 222 / 40%) 0%, rgb(252 0 255 / 40%) 100%);
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
