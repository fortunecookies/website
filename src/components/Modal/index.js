import React from 'react'
import { node, bool, func } from 'prop-types'
import styled from 'styled-components'
import { Portal } from 'react-portal'

import Icon from 'components/Icon'
import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { black } from 'styles/colors'
import { animationTime, animationCurve, borderRadius } from 'styles/global'
import { rgba } from 'polished'

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  transition: opacity ${animationTime} ${animationCurve}, visibility ${animationTime} ${animationCurve};
  background-color: ${rgba(black, 0.75)};
  opacity: ${props => (props.visible && 1) || 0};
  visibility: ${props => (props.visible && 'visible') || 'hidden'};
  pointer-events: ${props => (props.visible && 'auto') || 'none'};
  z-index: 600;
`

const Table = styled.div`
  display: table;
  table-layout: fixed;
  height: 100%;
  width: 100%;
`

const Cell = styled.div`
  display: table-cell;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  padding: ${spacing.large};

  ${mediaDown.medium`
    padding-top: 56px;
  `};

  ${media.medium`
    padding: ${spacing.xLarge};
  `};

  ${media.large`
    padding: ${spacing.xxxLarge};
  `};
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => (props.narrow ? '440px' : '560px')};
  border-radius: ${borderRadius};
  z-index: 450;
`

const Close = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${spacing.medium};

  ${media.large`
    padding: ${spacing.large};
  `};
`

const Modal = ({ children, visible, narrow, close = () => {}, ...rest }) => (
  <Portal>
    <Container visible={visible}>
      <Table>
        <Cell>
          <Inner narrow={narrow}>{children}</Inner>
        </Cell>
      </Table>
      <Close onClick={close}>
        <Icon icon="close" white />
      </Close>
    </Container>
  </Portal>
)

Modal.propTypes = {
  children: node.isRequired,
  visible: bool,
  narrow: bool,
  close: func
}

export default Modal
