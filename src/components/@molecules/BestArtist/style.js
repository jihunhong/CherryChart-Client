import styled from 'styled-components';

export const StyledBestArtist = styled.article`
  position: relative;
  width: 100%;
  padding-bottom: calc(100% * (6 / 17));
  h2 {
    margin-bottom: 0px;
    position: absolute;
    top: 74px;
    left: 0;
    margin-left: 11px;
    :after {
      position: absolute;
      top: 50%;
      left: -11px;
      content: '';
      height: 60%;
      width: 4px;
      transform: translateY(-50%);
      background-color: var(--primary-color);
    }
  }
  div.meta-container {
    border-radius: 14px;
    background-color: #f4f4f4;
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: calc(100% * (4 / 17));
    z-index: 1;
    :after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      background: linear-gradient(
        35deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.3) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
      );
    }
  }
  div.meta {
    width: calc(100% - 380px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4%;
    z-index: 2;
    span.artist-name {
      color: var(--font-default-color);
      font-weight: 600;
      &.artist-name {
        font-size: 4rem;
      }
    }
    p {
      color: var(--font-gray-color);
      margin-bottom: 2rem;
    }
    .status {
    }
  }
  & img {
    width: 319px;
    position: absolute;
    bottom: 0;
    right: 2rem;
    filter: grayscale(1);
    z-index: 3;
  }
`;

export const StyledDetailDiv = styled.div`
  display: flex;
  align-items: center;
  .icon-container {
    width: 28px;
    background-color: #7a7a7a4d;
    padding: 8px;
    display: flex;
    border-radius: 33%;
    margin-right: 10px;
  }
  .rated {
    display: flex;
    align-items: center;
    span {
      color: var(--font-gray-color);
      margin: 0 4px;
    }
  }
`;
