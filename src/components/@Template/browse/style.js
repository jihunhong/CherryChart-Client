import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const BrowserContainer = styled.section`
  & section {
    margin: 14px 0;
    > ${Headings} {
      font-size: 17px;
      margin-bottom: 0;
    }
  }

  .recently-updated-videos {
    & .slick-track {
      margin-left: -12px;
      margin-right: -12px;
    }
  }

  .recently-updated-songs {
    > ${Headings} {
      margin-bottom: 12px;
    }
  }
`;
