import { keyframes } from 'styled-components';

export const playlistRenderAnim = keyframes`
    from {
      height : 0;
    }

    to {
      height : 200px;
    }
`;

export const SlideUp = keyframes`
  from {
    transform: translate(0, 120px);
  }
  to {
    transform: translate(0, 0px);
  }
  
`;

export const ripple = keyframes`
  0% {
    top: 42px;
    left: 42px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 13px;
    left: 13px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

export const StarUpSlide = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-2000px);
  }
`;

export const Beated = keyframes`
  50% {
    height: 20%;
  }
  100% {
    height : 80%;
  }
`;
