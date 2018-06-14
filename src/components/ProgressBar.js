import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'
import { stripUnit, rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { animationTime, animationCurve } from 'styles/global'
import { secondaryColor, offWhite } from 'styles/colors'
import { media } from 'styles/media'
import SmallCaps from 'components/SmallCaps'

const Container = styled.div`
  position: relative;
`

const Bar = styled.div`
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
  box-shadow: 0 8px 16px 0 ${rgba(secondaryColor, 0.4)};

  ${media.medium`
    border-radius: ${spacing.small};
  `};
`

const Numbers = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${stripUnit(spacing.small) * 1.5 + 'px'};

  ${media.medium`
    margin-top: ${spacing.medium};
  `};
`

const ProgressBar = ({ progress, amount, remaining }) => (
  <Container>
    <Bar>
      <Fill style={{ width: progress + '%' }} />
    </Bar>
    {amount &&
      remaining && (
        <Numbers>
          <SmallCaps>{amount}</SmallCaps>
          <SmallCaps>{remaining}</SmallCaps>
        </Numbers>
      )}
  </Container>
)

ProgressBar.propTypes = {
  progress: number.isRequired,
  amount: string.isRequired,
  remaining: string.isRequired
}

export default ProgressBar
