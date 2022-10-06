import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledMain = styled(Layout.Content)`
  background: var(--background-color);
  padding: 0 50px 80px;
  position: relative;
  max-width: 1680px;
  margin: 0 auto;

  & > section {
    margin: 3.8rem auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
