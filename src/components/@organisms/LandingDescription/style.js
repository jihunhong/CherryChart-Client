import { Span } from '@atoms/Text/style';
import { Headings } from '@atoms/Title/style';
import { imgCdn } from '@config/';
import styled from 'styled-components';

export const LandingDescriptionContainer = styled.section`
  max-width: 91.66666667%;
  font-family: 'Poppins', sans-serif;
  border-radius: 14px;
  > .ant-row {
    border-radius: 18px;
    height: 40vh;
    background-image: url('${imgCdn}/static/playlist-background.png?w=3000&ar=2025:503&fit=crop&auto=format');
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    z-index: 0;
    & :after {
      border-radius: 13px;
      background-color: var(--background-color);
      opacity: 0.92;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=85)';
      z-index: -1;
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  .ant-col {
    display: flex;
    align-items: center;
  }
  .description {
    height: 100%;
    flex-direction: column;
    ${Headings} {
      margin-top: auto;
    }
    ${Span} {
      margin-bottom: auto;
      margin-right: auto;
    }
  }
`;
