import { css } from 'styled-components'
import { media } from 'styles/media'

export default css`

  .u-1-1 {
    width: 100% !important;
  }

  .u-1-4 {
    width: 25% !important;
  }

  .u-1-3 {
    width: 33.3333% !important;
  }

  .u-1-2 {
    width: 50% !important;
  }

  ${media.small`

    .u-1-2-sm {
      width: 50% !important;
    }

    .u-1-3-sm {
      width: 33.3333% !important;
    }

    .u-2-3-sm {
      width: 66.6666% !important;
    }

    .u-3-4-sm {
      width: 75% !important;
    }

    .u-1-4-sm {
      width: 25% !important;
    }

  `};

  ${media.medium`

    .u-1-2-md {
      width: 50% !important;
    }

    .u-1-3-md {
      width: 33.3333% !important;
    }

    .u-1-4-md {
      width: 25% !important;
    }

    .u-1-5-md {
      width: 20% !important;
    }

    .u-2-5-md {
      width: 40% !important;
    }

  `};

  ${media.large`

    .u-1-3-lg {
      width: 33.3333% !important;
    }

  `};

  ${media.xLarge`

    .u-1-5-lg {
      width: 20% !important;
    }

    .u-2-5-lg {
      width: 40% !important;
    }

  `};

`