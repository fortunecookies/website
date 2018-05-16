import React from 'react'
import { number } from 'prop-types'
import styled from 'styled-components'
import { stripUnit, rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { animationTime, animationCurve } from 'styles/global'
import { secondaryColor, offWhite } from 'styles/colors'
import { media } from 'styles/media'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${stripUnit(spacing.small) * 1.5 + 'px'};
  border-radius: 6px;
  background-color: ${offWhite};

  ${media.medium`
    height: ${spacing.medium};
    border-radius: ${spacing.small};
  `};
`

const Fill = styled.div`
  width: 10%;
  height: 100%;
  background-color: ${secondaryColor};
  transition: width ${animationTime} ${animationCurve};
  border-radius: 6px;
  box-shadow: 0 8px 22px 0 ${rgba(secondaryColor, 0.4)};

  ${media.medium`
    border-radius: ${spacing.small};
  `};
`

const ProgressBar = ({ progress, ...rest }) => (
  <Container>
    <Fill style={{ 'width': progress + '%' }} />
  </Container>
)

ProgressBar.propTypes = {
  progress: number.isRequired
}

export default ProgressBar