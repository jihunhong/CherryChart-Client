import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const ChartContainer = styled('div')`
  display: inline-block;
  width: 100%;
  ${Headings} {
    margin-bottom: 0px;
  }
`;

export const MusicList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1rem;
  padding: 0;
  margin-top: 29px;
`;

export const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;

  .shuffle {
    background-color: #fff;
    button {
      border: 1px solid var(--light-gray-color);
      background-color: #fff;
    }
    span {
      color: var(--gray-color);
      text-shadow: none;
    }
  }
`;
