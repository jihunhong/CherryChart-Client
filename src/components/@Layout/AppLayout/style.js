import { scrollbar } from '@components/Css/style';
import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1890ff;
    --font-primary-color: #262f57;
    --background-color: #fcfdfe;
  }
  h1, h2, h3, h4 {
    color: var(--font-primary-color);
    font-weight: 600;
    text-shadow: 0px 0px 1px rgb(0 0 0 / 60%);
  }

  button.ant-btn {
    span {
      margin-left: 4px;
    }
  }
`;

export const StyledLayout = styled(Layout)`
  ${scrollbar};
`;
