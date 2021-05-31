import { Button, Col, Row } from 'antd';
import styled from 'styled-components';

export const PlayButton = styled(Button)`
  border-radius: 6px;
  & span {
    color: #fff;
  }
`;

export const InfoContainer = styled(Row)`
  padding-left: 34px;
  flex-direction: column;

  & .col {
    margin: auto auto;
  }

  & h2 {
    // album title
    margin-bottom: 0px;
    color: #262f57;
  }

  & h3 {
    margin: 0;
  }

  & p {
    margin-top: 23px;
  }
`;

export const ActionColumn = styled(Col)`
  margin: auto auto 0px 0px;
`;
