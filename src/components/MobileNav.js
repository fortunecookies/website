import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Portal } from 'react-portal'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { primaryColor, white } from 'styles/colors'
import { square, animationTime, animationCurve } from 'styles/global'
import { H1 } from 'styles/typography'
import { media } from 'styles/media'
import * as spacing from 'styles/spacing'
import Icon from 'components/Icon'

const Container = styled.div`
  position: relative;

  ${media.medium`
    display: none;
  `};
`

const Trigger = styled.button`
  position: fixed;
  top: ${spacing.medium};
  right: ${spacing.medium};
  background-color: ${white};
  color: ${primaryColor};
  z-index: 400;
  box-shadow: 0 8px 16px 0 ${rgba(primaryColor, 0.3)};
  border-radius: 50%;
  ${square`50px`};
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${rgba(primaryColor, 0.96)};
  z-index: 300;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${animationTime} ${animationCurve}, visibility ${animationTime} ${animationCurve};

  ${media.medium`
    display: none;
  `};

  ${props => props.visible && css`
    opacity: 1;
    visibility: visible;
  `}
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Link = styled(NavLink)`
  color: ${white};
  width: 100%;
  text-align: center;
  display: block;
  margin-bottom: ${spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`

export const Label = styled(H1)`
  color: ${white};
`

@connect(null)
class MobileNav extends Component {
  state = {
    visible: false
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <Container visible={this.state.visible}>
        <Trigger visible={this.state.visible} onClick={this.toggle}>
          <Icon icon={this.state.visible ? 'close' : 'hamburger'} />
        </Trigger>
        <Portal>
          <Overlay visible={this.state.visible}>
            <Inner>
              <Link exact to="/how-to-play/"><Label>How to play</Label></Link>
              <Link exact to="/faqs/"><Label>FAQs</Label></Link>
              <Link exact to="/bake-sale/"><Label>Bake Sale</Label></Link>
              <Link exact to="#"><Label>Sign In</Label></Link>
            </Inner>
          </Overlay>
        </Portal>
      </Container>
    )
  }
}

export default MobileNav
