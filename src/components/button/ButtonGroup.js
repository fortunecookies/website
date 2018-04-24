import React from 'react'
import styled, { css } from 'styled-components'
import { node, bool } from 'prop-types'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { stripUnit } from 'polished'

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -${stripUnit(spacing.small) * 0.75 + 'px'};

  ${props => props.full && css`
    display: flex;
  `}

  ${media.medium`
    margin: -${spacing.small};
  `};
`

const Item = styled.div`
  padding: ${stripUnit(spacing.small) * 0.75 + 'px'};

  ${props => props.full && css`
    width: 100%;
  `}

  ${media.medium`
    padding: ${spacing.small};
  `};
`

const ButtonGroup = ({ children, full }) => (
  <Container full={full}>
    {React.Children.map(children, (child, i) => (
      <Item key={i} full={full}>
        {child}
      </Item>
    ))}
  </Container>
)

ButtonGroup.propTypes = {
  children: node.isRequired,
  full: bool
}

export default ButtonGroup
