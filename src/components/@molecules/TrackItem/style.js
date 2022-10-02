import styled from 'styled-components';

export const TrackListItemContainer = styled.li`
  width: 100%;
  margin: auto auto;
  padding: 0 1rem;
  display: flex;
  min-height: 5vh;

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
    margin: auto 1rem auto 1rem;
  }
  & .title {
    margin: auto 0 auto 1rem;
    max-width: 70%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TrackActions = styled.div`
  margin: auto 1rem auto auto;
  width: 80px;
  display: flex;
  justify-content: center;
  :hover {
    svg {
      transform: scale(1.45);
    }
  }

  & svg {
    transition: 0.25s ease-in-out;
    fill: #ff0000;
    cursor: pointer;
  }
`;
