import React, { Component } from 'react'
import { node } from 'prop-types'
import styled, { css } from 'styled-components'
import { Portal } from 'react-portal'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { verticalPadding, animationTime, animationCurve } from 'styles/global'
import { H2 } from 'styles/typography'
import { white, black } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import Icon from 'components/Icon'
import Button from 'components/button/Button'

const Container = styled.div`
  position: absolute;
  z-index: 20;
  top: 114px;
  width: 100%;
  background-image: linear-gradient(46deg, #454545 0%, ${black} 100%);
  margin-top: ${spacing.large};
  opacity: 0;
  visibility: hidden;
  transition: opacity ${animationTime} ${animationCurve}, visibility ${animationTime} ${animationCurve};
  ${verticalPadding`2.5rem`};

  ${props =>
    props.expanded &&
    css`
      opacity: 1;
      visibility: visible;
    `};

  ${media.small`
    top: 135px;
    ${verticalPadding`3rem`};
  `};

  ${media.medium`
    margin-top: ${spacing.small};
    top: 159px;
    ${verticalPadding`3.5rem`};
  `};

  ${media.large`
    ${verticalPadding`4rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`4.5rem`};
  `};
`

const Title = styled(H2)`
  color: ${white};
  margin-bottom: ${spacing.medium};

  ${media.medium`
    margin-bottom: ${spacing.large};
  `};
`

const Trigger = styled.button`
  display: flex;
  align-items: center;
`

const EmptyState = styled.div`
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
`

const Dropdown = styled(Icon)`
  flex-shrink: 0;
  margin-left: -${spacing.medium};
  pointer-events: none;

  ${props =>
    props.expanded &&
    css`
      transform: rotate(180deg);
    `};
`

export default class MyAccount extends Component {
  static propTypes = {
    label: node.isRequired
  };

  state = {
    expanded: false
  };

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded })
  };

  render() {
    const { expanded } = this.state

    return (
      <>
        <Trigger onClick={this.toggleExpanded}>
          {this.props.label}
          <Dropdown expanded={expanded} icon="dropdown" />
        </Trigger>
        <Portal>
          <Container expanded={expanded}>
            <Wrapper>
              <EmptyState>
                <Title>You don't have any good fortune charms yet :(</Title>
                <Button tertiary>Sign Out</Button>
              </EmptyState>
            </Wrapper>
          </Container>
        </Portal>
      </>
    )
  }
}
