import { css } from "styled-components";

export const media = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 1023px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  largeDevice: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
};
