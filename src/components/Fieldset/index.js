import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'
import { stripUnit } from 'polished'

import { media } from 'styles/media'
import * as spacing from 'styles/spacing'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${spacing.small};

  ${media.medium`
    margin: -${stripUnit(spacing.small) * 1.5 + 'px'};
  `};
`

const Fieldset = ({ children }) => <Container>{children}</Container>

Fieldset.propTypes = {
  children: node.isRequired
}

export default Fieldset
