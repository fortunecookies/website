import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { stripUnit } from 'polished'

import { media } from 'styles/media'
import * as spacing from 'styles/spacing'

const Container = styled.div`
  padding: ${spacing.small};
  width: 100%;

  ${media.medium`
    padding: ${stripUnit(spacing.small) * 1.5 + 'px'};
  `};
`

const FieldsetItem = ({ xs, sm, md, lg, xlg, children }) => (
  <Container
    className={classnames({
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

FieldsetItem.propTypes = {
  children: node.isRequired,
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xlg: string
}

export default FieldsetItem
