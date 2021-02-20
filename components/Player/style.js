import styled from "styled-components";

export const PlayerContainer = styled('div')`
    display : inline-block;
    width : 100%;
    padding-left : 1vw;
`

export const PlayerBackground = styled('div')`
    margin-top : 3vh;
    display: flex;
    background: #fff;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    height: 43.5vh;
    border-radius: 10px;

    & div {
        margin: auto;
        padding: 2vh 2vw;
    }
`