import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

import * as spacing from 'styles/spacing'
import { stripUnit } from 'polished'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${stripUnit(spacing.medium) * 0.5 + 'px'};
  margin-right: -${stripUnit(spacing.medium) * 0.5 + 'px'};
  margin-bottom: -${spacing.medium};

  ${media.medium`
    margin-left: -${stripUnit(spacing.large) * 0.5 + 'px'};
    margin-right: -${stripUnit(spacing.large) * 0.5 + 'px'};
    margin-bottom: -${spacing.large};
  `};
`

const GridRow = ({ children }) => <Container>{children}</Container>

GridRow.propTypes = {
  children: node.isRequired
}

export default GridRow
