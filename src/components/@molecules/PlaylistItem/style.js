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
    background: #e3e3e3a6;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 4px 0;
    overflow: hidden;
    position: relative;

    ${props => (props.$size === 0 ? css(emptyThumbContainer) : null)}

    :after {
      transition: opacity 0.3s ease-in-out;
      position: absolute;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      opacity: 0;
    }

    :hover {
      :after {
        opacity: 1;
      }
    }
  }

  .meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    span {
      :hover {
        text-decoration: underline;
      }
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
