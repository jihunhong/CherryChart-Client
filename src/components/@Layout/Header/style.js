import { Layout } from 'antd';
import styled from 'styled-components';

export const HeaderContainer = styled(Layout.Header)`
  background: var(--background-color);
  z-index: 101;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 12px 36px 12px 23px;
  width: 100%;
  height: var(--header-height);
  position: fixed;
`;
