import React from 'react'
import styled, { keyframes } from 'styled-components'

import { primaryColor } from 'styles/colors'
import { square } from 'styles/global'
import { media } from 'styles/media'
import Icon from 'components/Icon'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerIcon = styled(Icon)`
  animation: ${rotate} 1s linear infinite;
  fill: ${primaryColor};
  ${square`32px`};

  ${media.small`
    ${square`40px`};
  `};

  ${media.medium`
    ${square`48px`};
  `};

  ${media.large`
    ${square`56px`};
  `};
`

const Spinner = () => <SpinnerIcon icon="spinner" />

export default Spinner
