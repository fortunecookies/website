import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${props => (props.narrow ? '840px' : '1080px')};
  padding-left: ${spacing.large};
  padding-right: ${spacing.large};

  ${media.small`
    padding-left: ${spacing.xxLarge};
    padding-right: ${spacing.xxLarge};
  `};

  ${media.medium`
    padding-left: 48px;
    padding-right: 48px;
  `};

  ${media.xLarge`
    padding-left: 0;
    padding-right: 0;
  `};
`

const Wrapper = ({ children, narrow, ...rest }) => (
  <Container narrow={narrow}>
    {children}
  </Container>
)

Wrapper.propTypes = {
  children: node.isRequired,
  narrow: bool
}

export default Wrapper
