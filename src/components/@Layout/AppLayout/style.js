import { scrollbar } from '@components/Css/style';
import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary-color: #262f57;
  }
  h1, h2, h3, h4 {
    color: var(--font-primary-color);
    font-weight: 600;
    text-shadow: 0px 0px 1px rgb(0 0 0 / 60%);
  }

  button.ant-btn {
    & svg {
      margin-right: 6px;
    }
  }
`;

export const StyledLayout = styled(Layout)`
  ${scrollbar};
`;
