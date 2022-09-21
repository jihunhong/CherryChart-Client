import { ContentContainer } from '@atoms/Content/style';
import { InputContainer, StyledInput } from '@atoms/Input/style';
import { Span } from '@atoms/Text/style';
import { imgCdn } from '@config/';
import styled, { createGlobalStyle } from 'styled-components';

export const LoginPageGlobalStyle = createGlobalStyle`
  ${ContentContainer} {
    // aspect-ratio: 3840/2160;
    // background-image: url(./svg/bubbles.svg);
    // background-size: cover;
    // background-repeat: no-repeat;
  }
`;

export const LoginContainer = styled.div`
  margin: 5vh auto;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  gap: 4em;
  @supports not (gap: 1em) {
    margin: -1em;
    > div {
      margin: 1em;
    }
  }
  border-radius: 14px;
  overflow: hidden;
  padding-left: 24px;

  > div.login-describe-container {
    background-image: url('${imgCdn}/static/account-banner/${props => props.imageName}.jpeg');
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    height: 80vh;
    display: flex;
    justify-content: flex-end;
    flex: 30%;
    position: relative;
    :after {
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
    .login-describe {
      position: absolute;
      top: 50%;
      left: 2em;
      right: 2em;
      width: auto;
      z-index: 2;
      transform: translateY(-50%);
      .artists-profiles {
        display: flex;
        align-items: center;
        margin: 8px 0;
        span {
          margin-left: 8px;
        }
        div.profile-circle-container {
          & :nth-of-type(n + 2) {
            margin-left: -13px;
          }
        }
      }
      * {
        color: #fff;
      }
    }
    .ant-divider {
      margin: 8px 0;
      border-top: 1px solid #fff;
    }
    svg {
      vertical-align: middle;
    }
  }

  > div.action-container {
    flex: 25%;

    margin-top: auto;
    margin-bottom: auto;

    ${InputContainer} {
      margin-bottom: 2rem;
      ${StyledInput} {
        ::placeholder {
          font-style: normal;
        }
      }
    }

    h3 {
      letter-spacing: 1.012px;
    }

    .sign {
      margin: 14px 0;
      color: var(--font-gray-color);
    }

    ${Span} {
      display: inline-block;
      margin-bottom: 14px;
    }

    .ant-divider-inner-text {
      font-weight: 400;
      color: var(--font-gray-color);
    }

    a.login-form-forgot {
      float: right;
    }

    button {
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 42px;
      font-weight: 600;
    }
  }
`;
