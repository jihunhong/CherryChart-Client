import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import { SlideUp } from '@components/KeyFrames';
import styled from 'styled-components';

export const FeatureContainer = styled.section`
  ${SlideUp}
  position: relative;

  .grid {
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;
    grid-template-columns: 21% 17% 7% 31%;
    justify-content: center;
  }

  .grid {
    > span {
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      z-index: 3;
      transition: transform 0.3s ease-in-out;
      :hover {
        transform: scale(1.05);
        z-index: 5;
      }

      img {
        padding: 8px;
      }
    }
  }

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

  .feature-description {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    & ${Headings} {
      font-size: 50px;
      margin-bottom: 0.2em;
    }
    & ${Span}:nth-last-of-type(1) {
      margin-bottom: 0.7em;
    }

    & button {
      margin-right: 6px;
    }
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
