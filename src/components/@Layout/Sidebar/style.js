import styled from 'styled-components';
import { Layout } from 'antd';

export const SidebarContainer = styled(Layout.Sider)`
  height: calc(100vh - 56px);
  position: fixed;
  left: 0;
  border-right: 1px solid rgb(0 0 0 / 10%);

  .ant-layout-sider-children {
    margin: 16px 0;
  }

  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
  }
`;
