import styled from 'styled-components';
import { Layout } from 'antd';
import { SIDEBAR_WIDTH } from '@config/';
import { FlexColumn } from '@atoms/FlexColumn/style';
import { LogoContainer } from '@atoms/Logo/style';

export const FooterContainer = styled(Layout.Footer)`
  background: var(--background-color);
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  padding-top: 0;
  padding-left: ${SIDEBAR_WIDTH}px;
  min-height: 300px;
  ${LogoContainer} {
    margin-bottom: 6px;
  }
  > .grid-column {
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
    grid-column-gap: 14px;
  }
  .site-footer {
    font-family: 'Poppins';
    margin-bottom: 14px;
    > h1 {
      color: #000;
      font-size: 1.8em;
      margin-bottom: 0.5em;
    }
  }
  .contact {
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    margin: 9px 0;
    a {
      color: var(--font-primary-color);
      :hover {
        color: var(--primary-color);
      }
    }
    svg {
      margin-right: 8px;
    }
  }
`;

export const Author = styled.div`
  margin-left: 50px;
  padding: 30px 50px 50px 0;
  margin-bottom: 30px;
  border-top: 1px solid #000;
  color: var(--font-gray-color);
`;

export const SiteLinks = styled(FlexColumn)`
  align-items: center;
  ul {
    list-style: none;
  }
  li:nth-of-type(1) {
    // header
    margin-top: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }
  li {
    margin: 14px 0;
    font-family: 'Poppins';
    a {
      color: var(--font-gray-color);
      transition: color 0.3s;
      :hover {
        color: var(--primary-color);
      }
    }
  }
  .disabled {
    a {
      cursor: not-allowed;
    }
  }
`;
