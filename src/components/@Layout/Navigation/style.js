import { Menu } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const NavigationGlobal = createGlobalStyle`
    * {
        color : #262f57;
    }

    li.ant-menu-item > * {
        vertical-align: middle;
        font-weight : 600;
        font-size : 15px;
    }

    h1, h2, h3, h4, h5, span {
        text-shadow: 0px 0px 1px rgba(0,0,0,0.6);
    }

    .ant-layout-sider {
        svg {
            margin-right : 15px;
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
  padding-left: 43px !important;
`;
