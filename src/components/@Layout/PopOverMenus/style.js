import { FlexColumn } from '@atoms/FlexColumn/style';
import { ProfileCircleContainer } from '@atoms/ProfileCircle/style';
import styled from 'styled-components';

export const PopOverMenusContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;

  ${ProfileCircleContainer} {
    cursor: pointer;
  }
`;

export const UserMenuContainer = styled(FlexColumn)`
  a {
    color: var(--font-default-color);
  }
  div.menu-item {
    padding: 6px 16px;
    transition: background-color 0.1s ease-in-out;
    cursor: pointer;
    :hover {
      background-color: #eaeaeaad;
    }
    svg {
      margin-right: 0.45rem;
    }
  }
`;
