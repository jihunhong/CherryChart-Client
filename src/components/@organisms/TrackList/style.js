import styled from 'styled-components';

export const TrackListItemContainer = styled('li')`
  margin: auto auto;
  display: flex;
  background: #fff;
  min-height: 5vh;
  transition: box-shadow 0.8s ease-in-out;

  :hover {
    box-shadow: rgb(149 157 165 / 60%) 2px 3px 6px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  :nth-last-of-type {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :nth-of-type(even) {
    background-color: #fbfbfbcf;
  }
  :nth-of-type(odd) {
    background-color: #f7f7f7;
  }

  & .rank {
    margin: auto 13px auto 13px;
  }
  & .title {
    margin: auto 0 auto 13px;
    width: 12vw;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
