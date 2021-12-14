import { Input } from 'antd';
import styled from 'styled-components';

export const CustomInput = styled(Input)`
  border-radius: 23px;
  width: 40vw;
  margin: auto auto auto 0;

  .ant-input:placeholder-shown {
    font-size: 0.8em;
  }
`;
