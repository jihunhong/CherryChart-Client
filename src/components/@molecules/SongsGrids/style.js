import styled from 'styled-components';

export const SongsGrid = styled.div`
  display: grid !important;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;
`;
