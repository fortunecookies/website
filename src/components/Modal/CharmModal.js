import React from 'react'
import { func, bool, string } from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import OrnamentBlock from 'components/OrnamentBlock'
import Modal from 'components/Modal'
import { H3 } from 'styles/typography'
import { borderRadius, animationTime, animationCurve } from 'styles/global'
import { primaryColor, black, white, borderColor, grey } from 'styles/colors'
import * as spacing from 'styles/spacing'
import SmallCaps from 'components/SmallCaps'
import { media, mediaDown } from 'styles/media'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${spacing.large};
  background-color: ${grey};
  min-height: 460px;
  box-shadow: 0 0 0 10px ${rgba(white, 0.15)};
  border-radius: ${borderRadius};
  background-size: cover;
  background-position: center;
  background-image: ${props => {
    const image = require('static/images/' + props.figure)
    return `url(${image})`
  }};

  ${media.small`
    min-height: 540px;
  `};

  ${media.medium`
    min-height: 600px;
  `};

  ${media.large`
    min-height: 630px;
  `};

  ${media.xLarge`
    min-height: 660px;
  `};
`

const Title = styled(H3)`
  position: relative;

  &:after {
    content: '';
    display: block;
    margin: ${spacing.medium} auto;
    width: ${spacing.large};
    height: 2px;
    background-color: ${borderColor};
  }
`

const NumbersTitle = styled(SmallCaps)`
  color: ${primaryColor};
  display: block;
  margin-bottom: ${spacing.small};
`

const Details = styled.div`
  background-color: ${white};
  margin-top: auto;
`

const DetailsInner = styled.div`
  position: relative;
  text-align: center;
  padding: ${spacing.xxxLarge} ${spacing.xxLarge} ${spacing.xxLarge};

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    left: 20%;
    background-color: #ea4150;

    ${mediaDown.medium`
      display: none;
    `};
  }

  &:before {
    top: 20px;
  }

  &:after {
    bottom: 20px;
  }

  ${media.small`
    padding-bottom: ${spacing.xxxLarge};
  `};

  ${media.medium`
    padding-left: 72px;
    padding-right: 72px;
  `};
`

const Share = SmallCaps.withComponent('a').extend`
  position: absolute;
  top: ${spacing.large};
  right: ${spacing.large};
  background-color: ${rgba(black, 0.4)};
  border-radius: ${borderRadius};
  padding: ${spacing.small} ${spacing.medium};
  color: ${white};
  transition: background-color ${animationTime} ${animationCurve};

  &:hover,
  &:focus {
    background-color: ${rgba(black, 0.6)};
  }
`

const CharmModal = ({ visible, quote, numbers, figure, close = () => {} }) => (
  <Modal visible={visible} close={close} noClose narrow>
    <Container figure={figure}>
      <Share
        href={`https://twitter.com/intent/tweet?text=My fortune is "${quote}" The @FTNCookies enlightenment is real! https://fortunecookies.io/bakesale. #fortunecookies #cryptofortunate`}
        target="_blank"
      >
        Share
      </Share>
      <Details>
        <OrnamentBlock>
          <DetailsInner>
            <Title>{quote}</Title>
            <NumbersTitle>Numbers</NumbersTitle>
            <strong>{numbers}</strong>
          </DetailsInner>
        </OrnamentBlock>
      </Details>
    </Container>
  </Modal>
)

CharmModal.propTypes = {
  close: func,
  visible: bool,
  numbers: string.isRequired,
  figure: string.isRequired,
  quote: string.isRequired
}

export default CharmModal
