import styled, { css } from 'styled-components';

const emptyThumbContainer = css`
  height: 0;
  padding-bottom: 100%;
  svg {
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export const PlaylistItemContainer = styled.div`
  .thumb-container {
    display: grid;
    grid-template-rows: repeat(${props => (props.$size > 2 ? '2, 50%' : '1, 100%')});
    grid-template-columns: repeat(${props => (props.$size > 2 ? '2, 50%' : '1, 100%')});
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #e3e3e3a6;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 4px 0;
    overflow: hidden;
    position: relative;

    ${props => (props.$size === 0 ? css(emptyThumbContainer) : null)}
  }

  .meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    span {
      font-size: 1rem;
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span.user {
      color: var(--font-gray-color);
    }
  }
`;
