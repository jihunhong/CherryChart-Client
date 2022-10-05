import styled, { css } from 'styled-components';

const PlayerInExpandUI = css`
  position: fixed;
  top: 50%;
  left: 56px;
  --side-padding: calc(56px * 2);
  width: calc(100vw - var(--side-padding) - 36vw);
  aspect-ratio: 16/9;
  height: auto;
  z-index: 1;
  transform: translateY(-50%);
  > iframe {
    width: 100%;
    height: 100%;
  }
`;

export const BarPlayerContainer = styled.div`
  .youtube-container {
    position: absolute;
    bottom: 74px;
    left: 13px;
    width: 480px;
    height: 270px;
    z-index: 0;
    transition: all 0.6s;
    ${props => (props.$isExpand ? PlayerInExpandUI : '')}
    & iframe {
      width: 100%;
      height: 100%;
    }
  }
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 62px;
  background-color: #16151a;
  display: grid;
  align-items: center;
  grid-template-columns: 0fr 1fr 0fr;
  padding: 0 8px;
  z-index: 600;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  }

  > .played-info,
  .player-action {
    z-index: 500;
  }

  .played-info {
    width: 280px;
    margin: 0 auto;
  }

  .player-action {
    display: flex;
    align-items: center;
    .icon-container {
      margin: 0 12px;
      cursor: pointer;
      &.active svg {
        opacity: 1;
      }
      svg {
        opacity: 0.5;
        vertical-align: middle;
        color: #fff;
        transition: opacity 0.3s;
      }
      :hover {
        svg {
          opacity: 1;
        }
      }
    }
  }
`;
