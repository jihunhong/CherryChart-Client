import styled from 'styled-components';
import { Layout } from 'antd';

export const ContentContainer = styled(Layout.Content)`
  background: #fcfdfe;
  padding: 0 50px;

  & section {
    margin: 5vh auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
