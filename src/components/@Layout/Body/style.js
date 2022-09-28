import { Layout } from 'antd';
import styled from 'styled-components';

export const BodyContainer = styled(Layout.Content)`
  background: var(--background-color);
  padding: 0 50px 80px;
  position: relative;
  max-width: 1280px;
  margin: 0 auto 0 0;

  & > section {
    margin: 5vh auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
