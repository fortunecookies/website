import React from 'react'
import styled, { css } from 'styled-components'
import { node, bool, func } from 'prop-types'
import { Link } from 'react-router-dom'
import { mix, rgba, stripUnit } from 'polished'

import SmallCaps from 'components/SmallCaps'
import { primaryColor, white, black } from 'styles/colors'
import { animationTime, animationCurve, borderRadius, buttonHeightMobile, buttonHeightDesktop } from 'styles/global'
import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${buttonHeightMobile};
  border-radius: ${borderRadius};
  padding: 0 ${spacing.large};
  cursor: pointer;
  text-align: center;
  transition: background-color ${animationTime} ${animationCurve}, border-color ${animationTime} ${animationCurve}, transform ${animationTime} ${animationCurve}, opacity ${animationTime} ${animationCurve}, color ${animationTime} ${animationCurve};

  ${props => props.large && css`
    height: ${stripUnit(buttonHeightMobile) * 1.05 + 'px'};
  `}

  ${media.small`
    padding: 0 ${spacing.xLarge};
  `};

  ${media.medium`
    height: ${buttonHeightDesktop};
    padding: 0 ${spacing.xxLarge};

    ${props => props.large && css`
      height: ${stripUnit(buttonHeightDesktop) * 1.125 + 'px'};
    `}
  `};

  ${media.large`
    min-width: 230px;
  `};

  ${props => props.primary && css`
    background-color: ${primaryColor};
    color: ${white};
    box-shadow: 0 8px 22px 0 ${rgba(primaryColor, 0.4)};

    &:hover,
    &:focus,
    &:active {
      background-color: ${mix(0.93, primaryColor, black)};
    }
  `}

  ${props => props.secondary && css`
    background-color: transparent;
    color: ${primaryColor};
    border: 2px solid ${primaryColor};

    &:hover,
    &:focus,
    &:active {
      background-color: ${primaryColor};
      color: ${white};
    }
  `}

  ${props => props.full && css`
    width: 100%;
  `}

  &[disabled] {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
    user-select: none;
  }

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-1px);
  }
`

export const ButtonLinkContainer = ButtonContainer.withComponent(Link).extend`
  position: relative;
`

const Button = ({ children, primary, secondary, large, full, Container = ButtonContainer, ...rest }) => (
  <Container primary={primary} secondary={secondary} large={large} full={full} {...rest}>
    <SmallCaps>{children}</SmallCaps>
  </Container>
)

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  secondary: bool,
  large: bool,
  full: bool,
  Container: func
}

export const ButtonLink = ({ children, primary, secondary, large, full, ...rest }) => (
  <ButtonLinkContainer primary={primary} secondary={secondary} large={large} full={full} {...rest}>
    <SmallCaps>{children}</SmallCaps>
  </ButtonLinkContainer>
)

ButtonLink.propTypes = {
  children: node.isRequired,
  primary: bool,
  secondary: bool,
  large: bool,
  full: bool
}

export default Button
