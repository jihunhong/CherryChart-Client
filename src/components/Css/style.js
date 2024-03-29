import { css } from 'styled-components';

export const globalAntNotificationStyle = css`
  > div[class*='-notification-notice-'] {
    border-radius: 6px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 8px 40px rgba(0, 0, 0, 0.25);
    background: #faf9f9;
  }
`;

export const globalAntPopoverStyle = css`
  .ant-popover-inner-content {
    padding: 0;
  }
`;

export const globalAntBtn = css`
  button.ant-btn {
    display: flex;
    align-items: center;
  }
`;

export const scrollbar = css`
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 33px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.6);
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

export const ScaleUp = css`
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
`;

export const NeonGradientBackground = css`
  background-image: linear-gradient(90deg, rgb(0 219 222 / 40%) 0%, rgb(252 0 255 / 40%) 100%);
`;
