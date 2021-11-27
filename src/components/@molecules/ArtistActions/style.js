import { Row } from 'antd';
import styled from 'styled-components';

export const ArtistActionsContainer = styled(Row)`
  * {
    color: rgba(0, 0, 0, 0.85);
    fill: rgba(0, 0, 0, 0.85);
  }
  > section {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 14px;
    }
  }
  > section:nth-of-type(n + 2) {
    margin-left: 28px;
  }
`;
