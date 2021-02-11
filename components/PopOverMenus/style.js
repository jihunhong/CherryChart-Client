import styled, { createGlobalStyle } from "styled-components";
import { Badge } from "antd";

export const PopOverMenusGlobalStyle = createGlobalStyle`
    & span.ant-badge {
        margin : auto 0;
        & sup {
            box-shadow : none;
            transform: translate(0%, 0%);
            width: 9px;
            height: 9px;
            position: absolute;
            top: 2px;
            right: 16px;
            border : 1px solid #FDFDFE;
        }
    }

    svg {
        font-size : 23px !important;
        color : rgb(255 255 255 / 88%);
    }
`

export const InitilBadge = styled(Badge)`
    margin : auto 23px auto auto;
`