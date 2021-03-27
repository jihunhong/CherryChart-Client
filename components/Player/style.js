import styled from "styled-components";
import { Typography } from "antd";

export const PlayerContainer = styled('div')`
    background-color : #fff;
    position : fixed;
    bottom : 0;
    right: 1vw;
    // border : 3px solid orange;
    width : 30%;
`
export const PlayerHeader = styled('div')`
    padding-top : 14px;
    padding-left : 14px;
    padding-bottom : 9px;
    border: 1px solid rgba(149, 157, 165, 0.2);
    background : #fff !important;
    border-bottom : 0px;
`

export const Title = styled(Typography.Title)`
    margin-bottom : 0px !important;
`

export const Description = styled(Typography.Text)`
`


export const PlayerSaveContainer = styled('div')`
    padding-top : 14px;
    padding-left : 14px;
    padding-bottom : 9px;
    border: 1px solid rgba(149, 157, 165, 0.2);
    background : #fff !important;
`
export const PlayerBackground = styled('div')`
    display: flex;
    background: #fff;
    border: 1px solid rgba(149, 157, 165, 0.2);
    border-top: 0px solid;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    height: 25.5vh;

    & div {
        margin: auto;
        padding: 2vh 2vw;
    }
`