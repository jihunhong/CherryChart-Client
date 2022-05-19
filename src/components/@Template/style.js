import { Span } from '@atoms/Text/style';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin: 5vh auto;
  width: 100%;
  display: flex;
  > div.action-container {
    width: 31%;
    h3 {
      letter-spacing: 1.012px;
    }

    ${Span} {
      display: inline-block;
      margin-bottom: 14px;
    }

    a.login-form-forgot {
      float: right;
    }

    button {
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 42px;
    }
  }
  > div.background {
    width: 53%;
  }
`;
