import { css } from 'styled-components';

export const sizes = {
  phone: 480,
  tablet: 1024,
  laptop: 1440,
  desktop: 1920,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;

// xs   {screen} <= 576px
// sm 	{screen} ≥  576px
// md 	{screen} ≥  768px
// lg 	{screen} ≥  992px
// xl 	{screen} ≥  1200px
// xxl  {screen} ≥  1600px
