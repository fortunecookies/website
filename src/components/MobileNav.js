import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Portal } from 'react-portal'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactHelmet from 'react-helmet'

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

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
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

export const Link = H1.withComponent(NavLink).extend`
  color: ${white};
  width: 100%;
  text-align: center;
  display: block;
  margin-bottom: ${spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`

@connect(null)
class MobileNav extends Component {
  state = {
    visible: false
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  };

  render() {
    return (
      <Container visible={this.state.visible}>
        <Trigger visible={this.state.visible} onClick={this.toggle}>
          <Icon icon={this.state.visible ? 'close' : 'hamburger'} />
        </Trigger>
        <Portal>
          <ReactHelmet bodyAttributes={{ class: this.state.visible ? 'is-clipped' : '' }} />
          <Overlay visible={this.state.visible}>
            <Inner>
              <Link exact to="/how-to-play/" onClick={this.toggle}>
                How to play
              </Link>
              <Link exact to="/faqs/" onClick={this.toggle}>
                FAQs
              </Link>
              <Link exact to="/bake-sale/" onClick={this.toggle}>
                Bake Sale
              </Link>
              <Link exact to="#" onClick={this.toggle}>
                Sign In
              </Link>
            </Inner>
          </Overlay>
        </Portal>
      </Container>
    )
  }
}

export default MobileNav
