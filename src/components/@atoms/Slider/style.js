import styled from 'styled-components';

export const SliderContainer = styled.div`
  > ul.list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    display: grid;
    padding: 0;
    margin: 0;

    grid-column-gap: ${props => props.$gap}px;
    grid-auto-flow: column;
    grid-auto-columns: ${props =>
      typeof props.$occupy === 'string' ? props.$occupy : props.$occupy + '%'};
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;

    scroll-snap-type: inline mandatory;

    > * {
      scroll-snap-align: start;
    }
  }
`;
