import { Button } from 'antd';
import styled from 'styled-components';

export const PlayButton = styled(Button)`
  border-radius: 6px;
  background-color: #d60017;
  :hover {
    background-color: #ec2b40;
  }
  border: none;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: #fff;
      stroke: #fff;
      margin: 0;
    }
    span {
      color: #fff;
    }
  }
`;

export const AlbumInfoHeader = styled.section`
  display: grid;
  grid-template-columns: 270px auto;
  column-gap: 12px;
  align-items: center;

  & h2,
  h3 {
    margin: 0 !important;
    align-items: baseline;
  }

  .info {
    padding-inline-start: 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    position: relative;
    .artist {
      color: #fa586a;
      text-shadow: none;
    }
  }

  & button {
    position: absolute;
    bottom: 0;
    left: 34px;
  }
`;
