import { media } from 'styles/media'
import { greyDark, primaryColor } from 'styles/colors'
import { animationTime, animationCurve } from 'styles/global'
import styled, { injectGlobal } from 'styled-components'
import { stripUnit, rgba } from 'polished'

// Font family
export const fontBody =
  "Graphik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
export const fontHeading =
  "titling-gothic-fb-compressed, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

// Font weights
export const fontRegular = 400
export const fontMedium = 500
export const fontBold = 700

// Line height
export const baseLineHeight = 1.5
export const headingLineHeight = 1

// Font sizes
export const regularFontSize = '16px'
export const smallFontSize = '14px'
export const tinyFontSize = '12px'

export const H1 = styled.h1`
  font-weight: ${fontMedium};
  font-size: 48px;
  line-height: ${headingLineHeight};
  font-family: ${fontHeading};
  text-transform: uppercase;
  ${media.small`font-size: 56px`};
  ${media.medium`font-size: 64px`};
  ${media.large`font-size: 72px`};
`

export const H2 = styled.h2`
  font-weight: ${fontMedium};
  font-size: 40px;
  line-height: ${headingLineHeight};
  font-family: ${fontHeading};
  text-transform: uppercase;
  ${media.small`font-size: 44px`};
  ${media.medium`font-size: 50px`};
  ${media.large`font-size: 56px`};
`

export const H3 = styled.h3`
  font-weight: ${fontMedium};
  font-size: 24px;
  line-height: ${headingLineHeight};
  font-family: ${fontHeading};
  text-transform: uppercase;
  ${media.small`font-size: 27px`};
  ${media.medium`font-size: 30px`};
  ${media.large`font-size: 32px`};
`

export const H4 = styled.h4`
  font-weight: ${fontMedium};
  font-size: 16px;
  line-height: ${headingLineHeight};
  font-family: ${fontHeading};
  text-transform: uppercase;
  ${media.small`font-size: 18px`};
  ${media.medium`font-size: 20px`};
  ${media.large`font-size: 24px`};
`

injectGlobal`

  body {
    font-family: ${fontBody};
    line-height: ${baseLineHeight};
    color: ${rgba(greyDark, 0.8)};
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
  }

  p {
    margin-bottom: 1.25em;

    a {
      border-bottom: 1px solid transparent;
      color: ${primaryColor};
      transition: border-color ${animationTime} ${animationCurve};

      &:hover,
      &:focus {
        border-color: ${rgba(primaryColor, 0.2)};
      }
    }
  }
`
