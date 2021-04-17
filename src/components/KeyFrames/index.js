import { keyframes } from 'styled-components';

export const smooth_render = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }
`;

export const horizontal_render = keyframes`
    from {
      height : 0%;
    }

    to {
      height : 100%;
    }
`;

export const disapper_horizontal = keyframes`
    from {
      height : 100%;
    }

    to {
      height : 0%;
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
