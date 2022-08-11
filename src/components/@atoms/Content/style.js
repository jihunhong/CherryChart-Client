import { Layout } from 'antd';
import styled from 'styled-components';

export const ContentContainer = styled(Layout.Content)`
  background: #fcfdfe;
  padding: 0 50px 80px;
  position: relative;

  & > section {
    margin: 5vh auto;
  }
  & * {
    box-sizing: border-box;
  }
`;
