import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import { media } from 'styles/media'
import { white, black } from 'styles/colors'

const Container = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: 0 12px 24px 0 ${rgba(black, 0.2)};
  background: url(${require('static/images/ornaments/top-left.png')}) top 20px left 20px no-repeat,
    url(${require('static/images/ornaments/top-right.png')}) top 20px right 20px no-repeat,
    url(${require('static/images/ornaments/bottom-left.png')}) bottom 20px left 20px no-repeat,
    url(${require('static/images/ornaments/bottom-right.png')}) bottom 20px right 20px no-repeat, ${white};
  background-size: 47px 35px;
`

const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 72px;
  background-color: #ea4150;

  ${media.small`
    height: 88px;
  `};

  ${media.medium`
    height: auto;
  `};

  &:nth-child(1) {
    top: 44px;
    left: 19px;

    ${media.medium`
      bottom: 44px;
    `};
  }

  &:nth-child(2) {
    top: 44px;
    right: 19px;

    ${media.medium`
      bottom: 44px;
    `};
  }

  &:nth-child(3) {
    bottom: 44px;
    left: 19px;
  }

  &:nth-child(4) {
    bottom: 44px;
    right: 19px;
  }
`

const HorizontalLine = styled.div`
  position: absolute;
  height: 2px;
  background-color: #ea4150;

  ${media.medium`
    width: 100px;
  `};

  &:nth-child(1) {
    top: 20px;
    left: 60px;
    right: 60px;

    ${media.medium`
      left: 60px;
      right: auto;
    `};
  }

  &:nth-child(2) {
    top: 20px;
    left: 60px;
    right: 60px;

    ${media.medium`
      right: 60px;
      left: auto;
    `};
  }

  &:nth-child(3) {
    bottom: 20px;
    left: 60px;
    right: 60px;

    ${media.medium`
      left: 60px;
      right: auto;
    `};
  }

  &:nth-child(4) {
    bottom: 20px;
    left: 60px;
    right: 60px;

    ${media.medium`
      right: 60px;
      left: auto;
    `};
  }
`

const OrnamentBlock = ({ children }) => (
  <Container>
    {children}
    <div>
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
    </div>
    <div>
      <HorizontalLine />
      <HorizontalLine />
      <HorizontalLine />
      <HorizontalLine />
    </div>
  </Container>
)

OrnamentBlock.propTypes = {
  children: node.isRequired
}

export default OrnamentBlock
