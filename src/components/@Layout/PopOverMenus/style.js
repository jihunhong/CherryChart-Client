import { Badge } from 'antd';
import styled from 'styled-components';

export const PopOverMenusContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  & span.ant-badge {
    margin: auto 0;
    & sup {
      box-shadow: none;
      transform: translate(0%, 0%);
      width: 9px;
      height: 9px;
      position: absolute;
      top: 2px;
      border: 1px solid #fdfdfe;
    }
  }

  svg {
    font-size: 23px !important;
    color: rgb(255 255 255 / 88%);
  }
`;

export const InitilBadge = styled(Badge)`
  margin: auto 23px auto auto;
`;
