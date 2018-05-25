import React from 'react'
import styled, { css } from 'styled-components'
import { string } from 'prop-types'
import { rgba } from 'polished'

import { primaryColor, green } from 'styles/colors'
import SmallCaps from 'components/SmallCaps'
import * as spacing from 'styles/spacing'
import { borderRadius } from 'styles/global'
import { media } from 'styles/media'

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: ${spacing.medium};
  border-radius: ${borderRadius};

  ${media.medium`
    padding: ${spacing.large};
  `};

  ${props =>
    props.type === 'negative' &&
    css`
      background-color: ${rgba(primaryColor, 0.1)};
      color: ${primaryColor};
    `} ${props =>
      props.type === 'positive' &&
      css`
        background-color: ${rgba(green, 0.15)};
        color: ${green};
      `};
`

const Notice = ({ type, text }) => (
  <Container type={type}>
    <SmallCaps>{text}</SmallCaps>
  </Container>
)

Notice.propTypes = {
  type: string.isRequired,
  text: string.isRequired
}

export default Notice
