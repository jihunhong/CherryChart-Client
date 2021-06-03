import { Layout } from 'antd';
import styled from 'styled-components';

export const ContentContainer = styled(Layout.Content)`
  background: #fcfdfe;
  padding: 0 50px;
  min-height: 100vh;

  & section {
    margin: 5vh auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
