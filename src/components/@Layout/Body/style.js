import { Layout } from 'antd';
import styled from 'styled-components';

export const BodyContainer = styled(Layout.Content)`
  background: var(--background-color);
  padding: 0 50px 80px;
  position: relative;

  & > section {
    margin: 5vh auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
