import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const ChartContainer = styled('div')`
  display: inline-block;
  width: 100%;
  ${Headings} {
    margin-bottom: 0px;
  }
`;

export const MusicList = styled('ol')`
  list-style: none;
  padding: 0;
  margin-top: 3vh;
`;
