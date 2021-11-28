import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const MyMusicContainer = styled.section`
  ${Headings} {
    padding-left: 43px;
    margin: 60px 0 20px 0;
  }
  li {
    cursor: not-allowed;
  }
`;
