import React from 'react'
import styled, { css } from 'styled-components'
import { node, bool, func } from 'prop-types'
import { Link } from 'react-router-dom'
import { mix, rgba, stripUnit } from 'polished'
import InlineSVG from 'svg-inline-react'

import SmallCaps from 'components/SmallCaps'
import { primaryColor, white, black } from 'styles/colors'
import {
  square,
  animationTime,
  animationCurve,
  borderRadius,
  buttonHeightMobile,
  buttonHeightDesktop
} from 'styles/global'
import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

export const ButtonContainer = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${buttonHeightMobile};
  border-radius: ${borderRadius};
  padding: 0 ${stripUnit(spacing.medium) * 1.25 + 'px'};
  cursor: pointer;
  text-align: center;
  transition: background-color ${animationTime} ${animationCurve}, border-color ${animationTime} ${animationCurve},
    transform ${animationTime} ${animationCurve}, opacity ${animationTime} ${animationCurve},
    color ${animationTime} ${animationCurve};

  ${props =>
    props.large &&
    css`
      min-width: 130px;
      height: ${stripUnit(buttonHeightMobile) * 1.05 + 'px'};
    `}

  ${props =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}

  ${media.small`
    padding: 0 ${spacing.xLarge};
    min-width: 160px;
  `};

  ${media.medium`
    height: ${buttonHeightDesktop};
    padding: 0 ${spacing.xxLarge};

    ${props =>
      props.large &&
      css`
        height: ${stripUnit(buttonHeightDesktop) * 1.125 + 'px'};
      `}
  `};

  ${media.large`
    min-width: 230px;
  `};

  ${props =>
    props.primary &&
    css`
      background-color: ${primaryColor};
      color: ${white};
      box-shadow: 0 8px 16px 0 ${rgba(primaryColor, 0.3)};

      &:hover,
      &:focus,
      &:active {
        background-color: ${mix(0.93, primaryColor, black)};
      }
    `}

  ${props =>
    props.secondary &&
    css`
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

  ${props =>
    props.tertiary &&
    css`
      background-color: transparent;
      color: ${white};
      border: 2px solid ${rgba(white, 0.2)};

      &:hover,
      &:focus,
      &:active {
        color: ${white};
        border-color: ${white};
      }
    `}

  ${props =>
    props.full &&
    css`
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

const Spinner = styled(InlineSVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  ${square`48px`};

  ${media.medium`
    ${square`64px`};
  `};
`

export const ButtonLinkContainer = ButtonContainer.withComponent(Link).extend`
  position: relative;
`

const Label = styled(SmallCaps)`
  position: static;
  transition: opacity ${animationTime} ${animationCurve};

  ${props =>
    props.isLoading &&
    css`
      opacity: 0;
    `};
`

const Button = ({
  children,
  primary,
  secondary,
  tertiary,
  large,
  full,
  isLoading,
  Container = ButtonContainer,
  ...rest
}) => (
  <Container
    primary={primary}
    secondary={secondary}
    tertiary={tertiary}
    isLoading={isLoading}
    large={large}
    full={full}
    {...rest}
  >
    {isLoading && <Spinner src={require(`static/images/loading.svg`)} raw />}
    <Label isLoading={isLoading}>{children}</Label>
  </Container>
)

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  secondary: bool,
  tertiary: bool,
  large: bool,
  isLoading: bool,
  full: bool,
  Container: func
}

export const ButtonLink = ({ children, primary, secondary, tertiary, large, full, isLoading, ...rest }) => (
  <ButtonLinkContainer
    primary={primary}
    secondary={secondary}
    tertiary={tertiary}
    isLoading={isLoading}
    large={large}
    full={full}
    {...rest}
  >
    {isLoading && <Spinner src={require(`static/images/loading.svg`)} raw />}
    <Label isLoading={isLoading}>{children}</Label>
  </ButtonLinkContainer>
)

ButtonLink.propTypes = {
  children: node.isRequired,
  primary: bool,
  secondary: bool,
  tertiary: bool,
  large: bool,
  isLoading: bool,
  full: bool
}

export default Button
