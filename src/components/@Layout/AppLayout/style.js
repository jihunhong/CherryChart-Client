import { scrollbar } from '@components/Css/style';
import { SIDEBAR_WIDTH } from '@config/';
import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1890ff;
    --font-plain-color: #262f57;
    --background-color: #fcfdfe;
    --sidebar-text-color: #939393;
    --melon-color: #00cd3c;
    --genie-color: #0095ff;
    --bugs-color: #ff3b28;
    --light-gray-color: #dadada;
    --gray-color: #a3a0a0;
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
  }

  .app-content {
    padding-top: 56px;
    padding-left: ${SIDEBAR_WIDTH}px;
  }

  button.ant-btn {
    display: flex;
    border-radius: 6px;
    align-items: center;
    border: none;
    span {
      color: #fff;
      margin-left: 4px;
    }
  }
`;

export const StyledLayout = styled(Layout)`
  ${scrollbar};
`;
