import styled from 'styled-components';

export const CarouselCoverImageContainer = styled.div`
  > span {
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
    margin-bottom: 13px;
    position: relative;
    :hover {
      :after {
        transform: translateY(0%);
      }
    }
    :after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 120%;
      content: '';
      background: linear-gradient(
        226deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
      );
      transform: translateY(-16%);
      will-change: transform;
      transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
    }
  }
`;
