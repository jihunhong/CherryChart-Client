import { Menu } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const NavigationGlobal = createGlobalStyle`
    li.ant-menu-item > * {
        vertical-align: middle;
        font-weight : 600;
        font-size : 15px;
    }

    h1, h2, h3, h4, h5, span {
        text-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
    }

    .ant-layout-sider {
        svg {
            margin-right: 12px;
            font-size : 17px;
            opacity : 0.5;
        }
    }

    // overwrite
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background : none;
        & svg {
            opacity : 1;
        }
    }

    .ant-menu-inline {
        border : none;
    }

    .ant-menu-inline .ant-menu-item::after {
        border-right : none;
    }

    .ant-menu-inline > .ant-menu-item {
        height: 33px;
        line-height: 33px;
    }

`;

export const MenuItem = styled(Menu.Item)`
  padding: 0 23px !important;
  > .ant-menu-item-icon + span {
    margin-left: 0;
    font-size: 1em;
    font-family: system-ui, 'Apple SD Gothic Neo', AppleGothic, sans-serif;
    font-weight: 400;
  }

  .ant-menu-title-content a {
  }
`;
