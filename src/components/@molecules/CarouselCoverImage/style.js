import styled from 'styled-components';

export const CarouselCoverImageContainer = styled.div`
  > span {
    border-radius: 8px;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    margin-bottom: 13px;
    :after {
      transform: scale(0.9) translateY(15px);
      filter: blur(10px);
      opacity: 0.9;
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      background-image: inherit;
      background-size: cover;
      z-index: -1;
      transition: filter 0.3s ease;
    }
  }
`;
