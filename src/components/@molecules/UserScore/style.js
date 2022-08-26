import { FlexColumn } from '@atoms/FlexColumn/style';
import styled from 'styled-components';

export const UserScoreContainer = styled(FlexColumn)`
  font-family: 'Poppins';
  span.value {
    font-weight: 600;
  }
  span.label {
    font-weight: 400;
    color: var(--gray-color);
  }
`;
