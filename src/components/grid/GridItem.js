import React from 'react'
import styled from 'styled-components'
import { node, string, bool } from 'prop-types'
import classnames from 'classnames'

import * as spacing from 'styles/spacing'
import { stripUnit } from 'polished'
import { media } from 'styles/media'

const Container = styled.div`
  padding-left: ${stripUnit(spacing.medium) * 0.5 + 'px'};
  padding-right: ${stripUnit(spacing.medium) * 0.5 + 'px'};
  margin-bottom: ${spacing.medium};

  ${media.medium`
    padding-left: ${stripUnit(spacing.large) * 0.5 + 'px'};
    padding-right: ${stripUnit(spacing.large) * 0.5 + 'px'};
    margin-bottom: ${spacing.large};
  `};
`

const GridItem = ({ xs, sm, md, lg, xlg, equalHeight, className, children }) => (
  <Container
    className={classnames(className, equalHeight && 'u-flex', {
      [`u-${xs}`]: xs,
      [`u-${sm}-sm`]: sm,
      [`u-${md}-md`]: md,
      [`u-${lg}-lg`]: lg,
      [`u-${xlg}-lg`]: xlg
    })}
  >
    {children}
  </Container>
)

GridItem.propTypes = {
  children: node.isRequired,
  xs: string.isRequired,
  sm: string,
  md: string,
  lg: string,
  xlg: string,
  className: string,
  equalHeight: bool
}

export default GridItem
