import styled from 'styled-components';

export const BrowserContainer = styled.section`
  & section {
    margin: 26px 0;
    > h2 {
      font-size: 17px;
      margin-bottom: 0;
    }
  }

  & section > h4 {
    margin-bottom: 12px;
  }

  .recently-updated-videos {
    & .slick-track {
      margin-left: -12px;
      margin-right: -12px;
    }
  }

  .recently-updated-songs {
  }
`;
