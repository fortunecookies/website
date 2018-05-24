import React from 'react'
import styled from 'styled-components'
import { string, node, number } from 'prop-types'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { H2 } from 'styles/typography'
import { primaryColor } from 'styles/colors'
import ProgressBar from 'components/ProgressBar'
import SmallCaps from 'components/SmallCaps'
import Countdown from 'components/Countdown'
import Button from 'components/button/Button'

const Container = styled.div`
  position: relative;

  ${mediaDown.medium`
    text-align: center;
  `};

  ${media.medium`
    display: flex;
    align-items: center;
    margin-top: -${spacing.large};
  `};

  ${media.large`
    margin-left: -${spacing.xLarge};
    margin-right: -${spacing.xLarge};
  `};

  ${media.xLarge`
    margin-left: -${spacing.xxLarge};
    margin-right: -${spacing.xxLarge};
  `};
`

const Figure = styled.div`
  position: relative;

  ${mediaDown.medium`
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${spacing.large};
  `};

  ${media.medium`
    width: 50%;
    padding-right: ${spacing.xxLarge};
  `};

  ${media.large`
    padding-right: ${spacing.xxxLarge};
  `};

  ${media.xLarge`
    padding-right: 72px;
  `};
`

const Content = styled.main`
  position: relative;

  ${media.medium`
    width: 50%;
  `};
`

const Lead = styled(SmallCaps)`
  display: block;
  color: ${primaryColor};
  margin-bottom: ${stripUnit(spacing.small) * 1.5 + 'px'};

  ${media.medium`
    margin-bottom: ${spacing.medium};
  `};
`

const Title = styled(H2)`
  margin-bottom: ${spacing.large};

  ${media.small`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.large`
    margin-bottom: ${spacing.xxLarge};
  `};

  ${media.xLarge`
    margin-bottom: ${spacing.xxxLarge};
  `};
`

const ProgressWrap = styled.div`
  max-width: 450px;
  margin-bottom: ${spacing.large};

  ${media.small`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.large`
    margin-bottom: ${spacing.xxLarge};
  `};

  ${media.xLarge`
    margin-bottom: ${spacing.xxxLarge};
  `};

  ${mediaDown.medium`
    margin-left: auto;
    margin-right: auto;
  `};
`

const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.small};

  ${media.medium`
    margin-bottom: ${spacing.medium};
  `};
`

const Price = styled.strong`
  color: ${primaryColor};
  font-size: 150%;
  margin-bottom: 0;
`

const BuyButton = styled(Button)`
  margin-bottom: ${spacing.large};
  flex-shrink: 0;

  ${media.small`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.medium`
    margin-bottom: 0;
    margin-right: ${spacing.large};
  `};

  ${media.large`
    margin-right: ${spacing.xLarge};
  `};

  ${media.xLarge`
    margin-right: ${spacing.xxLarge};
  `};
`

const BuyWrap = styled.div`

  ${media.medium`
    display: flex;
    align-items: center;
  `};
`

const SingleProduct = ({ lead, title, figure, price, averagePrice }) => (
  <Container>
    <Figure>{figure}</Figure>
    <Content>
      <Lead>{lead}</Lead>
      <Title>{title}</Title>
      <ProgressWrap>
        <PriceWrap>
          <Price>{price} ETH</Price>
          <SmallCaps>Avg. Sale Price: {averagePrice} ETH</SmallCaps>
        </PriceWrap>
        <ProgressBar progress={40} />
      </ProgressWrap>
      <BuyWrap>
        <BuyButton primary large>Buy Now</BuyButton>
        <Countdown />
      </BuyWrap>
    </Content>
  </Container>
)

SingleProduct.propTypes = {
  lead: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  figure: node.isRequired,
  averagePrice: number.isRequired
}

export default SingleProduct