import { SlideUp } from '@components/KeyFrames';
import styled from 'styled-components';

export const FeatureContainer = styled.section`
  animation-name: ${SlideUp};
  animation-duration: 1s;
  position: relative;

  .chart-column {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & img:nth-of-type(1) {
      margin-left: 20px;
    }
  }

  .play-column {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 14px;
    margin-bottom: 14px;

    & img:nth-of-type(1) {
      margin-left: 20px;
    }
    & img:nth-of-type(2) {
      margin-left: -16px;
    }
  }

  & img {
    width: 100%;
    padding: 8px;
    border-radius: 14px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    z-index: 3;
  }
  & img.albums {
    padding-top: 0px;
  }

  .orange-box {
    width: 100%;
    max-width: 390px;
    height: auto;
    aspect-ratio: 16/7;
    background: #ffa5006e;
    border-radius: 14px;
    margin-left: -29px;
    z-index: 1;
    position: absolute;
  }
`;
