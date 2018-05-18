import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { white, primaryColor } from 'styles/colors'
import { media } from 'styles/media'
import { fontBold } from 'styles/typography'

const Container = styled.div`
  position: relative;
  display: block;
  text-align: center;
  width: 100%;
  margin-bottom: ${spacing.medium};

  ${media.medium`
    margin-bottom: ${spacing.large};
  `};

  &:last-child {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  border: 1px solid ${rgba(primaryColor, 0.3)};
  padding: ${spacing.large};
  padding-top: ${spacing.xxLarge};

  ${media.medium`
    padding: ${spacing.xLarge};
    padding-top: 48px;
  `};

  ${media.large`
    padding: ${spacing.xxLarge};
    padding-top: ${spacing.xxxLarge};
  `};
`

const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-weight: ${fontBold};
  width: 64px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -${spacing.large};
  background-position: center;
  background-size: 100%;
  background-image: url(${require('static/images/step.png')});

  ${media.medium`
    width: 88px;
    height: 66px;
    margin-bottom: -33px;
  `};
`

const HowToStep = ({ children }) => (
  <Container>
    <Step>1</Step>
    <Content>
      {children}
    </Content>
  </Container>
)

HowToStep.propTypes = {
  children: node.isRequired
}

export default HowToStep
