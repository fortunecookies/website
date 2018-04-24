import React from 'react'
import styled, { css } from 'styled-components'
import { string, bool } from 'prop-types'

import { primaryColor, white } from 'styles/colors'
import * as spacing from 'styles/spacing'
import { tabBarHeight, borderRadius, animationTime, animationCurve } from 'styles/global'
import { rgba } from 'polished'
import { media } from 'styles/media'

const Container = styled.div`
  position: fixed;
  bottom: ${tabBarHeight};
  left: 0;
  right: 0;
  padding: ${spacing.medium};
  z-index: 500;
  display: block;
  background-color: ${rgba(primaryColor, 0.96)};
  color: ${white};
  opacity: 0;
  visibility: hidden;
  transform: translateY(${spacing.tiny});
  backdrop-filter: blur(5px);
  transition: opacity ${animationTime} ${animationCurve}, visibility ${animationTime} ${animationCurve}, transform ${animationTime} ${animationCurve};

  ${props => props.visible && css`
    opacity: 1;
    visibility: visible;
    transform: none;
  `}

  ${media.medium`
    left: auto;
    bottom: ${spacing.large};
    right: ${spacing.large};
    border-radius: ${borderRadius};
  `};

  ${media.large`
    bottom: ${spacing.xLarge};
    right: ${spacing.xLarge};
    padding: ${spacing.medium} ${spacing.large};
  `};
`

const Toast = ({ message, visible, ...rest }) => (
  <Container visible={visible} {...rest}>
    <p>{message}</p>
  </Container>
)

Toast.propTypes = {
  message: string.isRequired,
  visible: bool
}

export default Toast
