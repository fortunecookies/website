import React from 'react'
import { string, bool } from 'prop-types'
import InlineSVG from 'svg-inline-react'
import { white, primaryColor, greyLight } from 'styles/colors'
import { square } from 'styles/global'
import styled from 'styled-components'
import * as spacing from 'styles/spacing'

const getFill = props => {
  if (props.white) return white
  if (props.brand) return primaryColor
  if (props.light) return greyLight
  return 'currentColor'
}

const getSpacing = ({ small, medium }) => {
  if (small) return spacing.medium
  if (medium) return spacing.xLarge
  return spacing.large
}

export const Container = styled(({ white, brand, light, small, medium, ...rest }) => <InlineSVG {...rest} />)`
  display: inline-block;
  fill: ${getFill};
  vertical-align: top;
  ${square(getSpacing)};
`

const Icon = ({ icon, ...rest }) => <Container {...rest} src={require(`static/icons/${icon}.svg`)} raw />

Icon.propTypes = {
  icon: string.isRequired,
  white: bool,
  light: bool,
  brand: bool,
  small: bool,
  medium: bool
}

export default Icon
