import {
  globalAntBtn,
  globalAntNotificationStyle,
  globalAntPopoverStyle,
  scrollbar,
} from '@components/Css/style';
import { SIDEBAR_WIDTH } from '@config/';
import { Layout } from 'antd';
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1890ff;
    --light-plain-color: #3657dc;
    --font-default-color: rgba(0, 0, 0, 0.85);
    --font-plain-color: #262f57;
    --background-color: #fcfdfe;
    --sidebar-text-color: #939393;
    --melon-color: #00cd3c;
    --genie-color: #0095ff;
    --bugs-color: #ff3b28;
    --light-gray-color: #dadada;
    --gray-color: #a3a0a0;
    --font-gray-color: #868484;
    --dark-gray: #434343;
    --yellow-slider-dot: #ffd351e6;

    --header-height: 56px;
    --bar-player-height: 62px;
    font-size: 14px;
  }
  body {
    overscroll-behavior: none;
  }
  h1, h2, h3, h4 {
    color: var(--font-plain-color);
    font-weight: 600;
    text-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  }

  #__next {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: stretch;
    > .ant-layout {
      background: var(--background-color);
    }
  }

  .sortable-play-item {
    z-index: 700;
  }
  .app-content {
    background: var(--background-color);
    padding-top: 56px;
    padding-left: ${SIDEBAR_WIDTH}px;
  }

  button.ant-btn {
    border-radius: 4px;
    svg, span {
      vertical-align: middle;
    }
    svg {
      margin-right: 4px;
      
    }
  }

  

  ${globalAntNotificationStyle}
  ${globalAntPopoverStyle}
  ${globalAntBtn}
`;

export const StyledLayout = styled(Layout)`
  ${scrollbar};
`;
