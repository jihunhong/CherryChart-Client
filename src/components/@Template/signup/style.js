
import { Span } from '@atoms/Text/style';
import styled from 'styled-components';

export const SignUpContainer = styled.div`
  margin: 5vh auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1em;
  @supports not (gap: 1em) {
    margin: -1em;
    > div {
      margin: 1em;
    }
  }

  > div.login-describe-container {
    display: flex;
    justify-content: center;
    flex: 55%;
    position: relative;
    .artist-description {
      position: absolute;
      bottom: 6em;
      right: 12em;
      width: auto;
      z-index: 2;
    }
    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
            to bottom,
            var(--background-color) 5%,
            transparent 33%,
            var(--background-color) 93%
          )
          top,
        linear-gradient(
          to right,
          var(--background-color) 10%,
          transparent 33%,
          var(--background-color) 93%
        );
      z-index: 1;
    }
    > img {
      object-fit: cover;
      max-height: 85vh;
    }
  }
  
  > div.action-container {
    flex: 40%;

    margin-top: auto;
    margin-bottom: auto;
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
`;
