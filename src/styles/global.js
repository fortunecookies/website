import { css, injectGlobal } from 'styled-components'
import { rgba } from 'polished'

import Normalize from 'styles/normalize'
import Width from 'styles/width'
import Utilities from 'styles/utilities'
import { black } from 'styles/colors'

// Animation
export const animationTime = '0.3s'
export const animationCurve = 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'

// Border Radius
export const borderRadius = '5px'

// Button
export const buttonHeightMobile = '56px'
export const buttonHeightDesktop = '64px'

// Inputs
export const inputHeight = '46px'
export const inputHeightSmall = '38px'

// Vertical padding
export const verticalPadding = padding => css`
  padding-top: ${padding};
  padding-bottom: ${padding};
`

// Square
export const square = size => css`
  width: ${size};
  height: ${size};
`

// Box shadow
export const boxShadow = `box-shadow: 0 2px 4px 0 ${rgba(black, 0.1)};`
export const boxShadowLight = `box-shadow: 0 2px 4px 0 ${rgba(black, 0.05)};`

// Cover
export function cover(position) {
  return `
    position: ${position};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
}

// Styles

injectGlobal`
  ${Normalize};
  ${Width};
  ${Utilities};
`