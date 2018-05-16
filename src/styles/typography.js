import { media } from 'styles/media'
import { greyDark, grey, borderColor, black } from 'styles/colors'
import { animationTime, animationCurve } from 'styles/global'
import styled, { injectGlobal } from 'styled-components'
import { stripUnit, mix } from 'polished'

// Font family
export const fontBody = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
export const fontHeading = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

// Font weights
export const fontRegular = 400
export const fontMedium = 500
export const fontSemibold = 600
export const fontBold = 700
export const fontHeavy = 800

// Line height
export const baseLineHeight = 1.5
export const headingLineHeight = 1

// Font sizes
export const regularFontSize = '16px'
export const smallFontSize = '14px'
export const tinyFontSize = '12px'

export const H1 = styled.h1`
  font-weight: ${fontHeavy};
  font-size: 42px;
  line-height: ${headingLineHeight};
  text-transform: uppercase;
  ${media.small`font-size: 48px`};
  ${media.medium`font-size: 56px`};
  ${media.large`font-size: 64px`};
`

export const H2 = styled.h2`
  font-weight: ${fontHeavy};
  font-size: 20px;
  line-height: ${headingLineHeight};
  ${media.medium`font-size: 22px`};
  ${media.large`font-size: 24px`};
`

export const H3 = styled.h3`
  font-weight: ${fontHeavy};
  font-size: 16px;
  line-height: ${headingLineHeight};
  ${media.medium`font-size: 17px`};
  ${media.large`font-size: 18px`};
`

export const H4 = styled.h4`
  font-weight: ${fontBold};
  font-size: 15px;
  line-height: ${headingLineHeight};
  ${media.medium`font-size: 16px`};
`

injectGlobal`

  body {
    font-family: ${fontBody};
    line-height: ${baseLineHeight};
    color: ${grey};
    font-size: ${stripUnit(regularFontSize) - 1 + 'px'};

    ${media.medium`
      font-size: ${regularFontSize};
    `};
  }

  small {
    font-size: ${smallFontSize};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    color: ${greyDark};
    font-family: ${fontHeading};
  }

  p {
    margin-bottom: 1.25em;

    a {
      border-bottom: 1px solid ${borderColor};
      transition: border-color ${animationTime} ${animationCurve};

      &:hover,
      &:focus {
        border-color: ${mix(0.85, borderColor, black)};
      }
    }
  }
`