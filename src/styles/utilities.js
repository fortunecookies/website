import { css } from 'styled-components'
import { media, mediaDown } from 'styles/media'

export default css`
  .u-hide-small-down {
    ${mediaDown.small`
      display: none !important;
    `};
  }

  .u-hide-medium-down {
    ${mediaDown.medium`
      display: none !important;
    `};
  }

  .u-hide-medium-up {
    ${media.medium`
      display: none !important;
    `};
  }

  .u-text-right {
    text-align: right !important;
  }

  .u-text-right-medium-up {
    ${media.medium`
      text-align: right !important;
    `};
  }
`
