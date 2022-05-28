import styled from 'styled-components';

export const TrackListItemContainer = styled('li')`
  margin: auto auto;
  display: flex;
  transition: box-shadow 0.8s ease-in-out;
  min-height: 5vh;

  :hover {
    box-shadow: rgb(149 157 165 / 60%) 2px 3px 6px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  :nth-last-of-type(1) {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :nth-of-type(even) {
  }
  :nth-of-type(odd) {
    background-color: rgb(0 0 0 / 2%);
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
