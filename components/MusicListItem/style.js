import styled from "styled-components";


export const MusicListItemContainer = styled('li')`
    margin : 1.5vh auto;
    display : flex;
    background : #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius : 6px;
`

export const Rank = styled('span')`
    margin : auto 0 auto 1.5vw;
`

export const CoverImageContainer = styled('div')`
    margin: auto 1.5vw;

    & img {
        padding : 4px;
    }
`

export const Title = styled('span')`
    margin : auto 1.5vw;
    width : 12vw;
    display : inline-block;
`

export const Artist = styled('span')`
    margin : auto 1.5vw;
    width : 10vw;
    display : inline-block;
    font-weight : 400;
    color : rgba(0, 0, 0, 0.45);
`

export const Duration = styled('span')`
    margin : auto 1.5vw;
    width : 4vw;
    display : inline-block;
    font-weight : 400;
    color : rgba(0, 0, 0, 0.45);
`

export const HeartIcon = styled('span')`
    margin : auto;
`