import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Portal } from 'react-portal'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { primaryColor, white } from 'styles/colors'
import { square } from 'styles/global'
import * as spacing from 'styles/spacing'
import Icon from 'components/Icon'

const Container = styled.div`
  position: relative;
`

const Trigger = styled.button`
  position: fixed;
  top: ${spacing.medium};
  right: ${spacing.medium};
  background-color: ${white};
  color: ${primaryColor};
  z-index: 400;
  box-shadow: 0 8px 22px 0 ${rgba(primaryColor, 0.4)};
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
  display: none;

  ${props => props.visible && css`
    display: block;
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

const Link = styled(NavLink)`
  color: ${white}
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
              <Link exact to="#">How to play</Link>
              <Link exact to="#">FAQs</Link>
              <Link exact to="#">Bake Sale</Link>
              <Link exact to="#">Sign In</Link>
            </Inner>
          </Overlay>
        </Portal>
      </Container>
    )
  }
}

export default MobileNav
