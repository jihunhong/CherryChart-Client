import { Layout } from 'antd';
import styled from 'styled-components';

export const HeaderContainer = styled(Layout.Header)`
  background: #fcfdfe;
  display: flex;
  justify-content: space-between;
  & svg {
    margin-right: 15px;
    font-size: 17px;
    opacity: 0.5;
  }
`;
