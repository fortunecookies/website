import { css } from 'styled-components'

// Breakpoints
export const breakpoints = {
  small: 600,
  medium: 940,
  large: 1140,
  xLarge: 1360
}

export const media = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => ({
    ...acc,
    [label]: (...args) =>
      css`
        @media (min-width: ${size}px) {
          ${css(...args)};
        }
      `
  }),
  {}
)

export const mediaDown = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => ({
    ...acc,
    [label]: (...args) =>
      css`
        @media (max-width: ${size - 1}px) {
          ${css(...args)};
        }
      `
  }),
  {}
)
