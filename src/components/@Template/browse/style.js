import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const BrowserContainer = styled.section`
  & .recently-updated-videos {
    margin: 28px 0;
    ${Headings} {
      margin-bottom: 0;
    }
  }
`;
