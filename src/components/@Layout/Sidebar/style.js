import styled from 'styled-components';
import { Layout } from 'antd';

export const SidebarContainer = styled(Layout.Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  overflow: hidden;
  border-right: 1px solid rgb(0 0 0 / 10%);

  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    color: unset;
  }
`;
