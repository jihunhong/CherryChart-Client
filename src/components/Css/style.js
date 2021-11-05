import { css } from 'styled-components';

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
