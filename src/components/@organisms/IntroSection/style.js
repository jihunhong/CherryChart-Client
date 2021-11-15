import styled from 'styled-components';

export const IntroSectionContainer = styled.section`
  margin: 5vh -50px !important;
  position: relative;
`;

export const VideoWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: auto;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    & iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }
  }
`;
