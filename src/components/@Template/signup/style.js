import { InputContainer } from '@atoms/Input/style';
import { Span } from '@atoms/Text/style';
import { LoginContainer } from '@Template/login/style';
import styled from 'styled-components';

export const SignUpContainer = styled(LoginContainer)`
  ${InputContainer} {
    margin-bottom: 2rem;
    &.valid {
      &:focus-within {
        :after {
          border-bottom: 2px solid #13d94d;
        }
      }
    }
    &.invalid {
      &:focus-within {
        :after {
          border-bottom: 2px solid #f00034;
        }
      }
    }
  }
`;
