import React from 'react'
import styled from 'styled-components'
import { array } from 'prop-types'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { primaryColor, black } from 'styles/colors'
import { H3 } from 'styles/typography'
import Wrapper from 'components/Wrapper'
import SmallCaps from 'components/SmallCaps'
import OrnamentBlock from 'components/OrnamentBlock'
import Section from 'components/Section'

const Container = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${primaryColor};
  background-image: linear-gradient(226deg, #d50038 0%, #870023 100%);
  background-size: cover;
  background-position: center;
  text-align: center;
`

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Title = styled(SmallCaps)`
  display: block;
  padding-top: ${spacing.xxxLarge};

  ${media.small`
    padding-top: 64px;
  `};

  ${media.medium`
    padding-top: ${spacing.xLarge};
  `};
`

const Content = styled.div`
  padding: ${spacing.large} ${spacing.xxLarge} 56px;

  ${media.small`
    padding: ${spacing.xLarge} ${spacing.xxxLarge} 64px;
  `};

  ${media.medium`
    padding: ${spacing.xxLarge} 56px;
  `};

  ${media.large`
    padding: 64px 64px 80px;
  `};

  ${media.xLarge`
    padding: 72px 80px 96px;
  `};
`

const Pattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(${require('static/images/pattern.png')});
  opacity: 0.05;
  background-blend-mode: multiply;
  background-size: 1200px;

  ${media.medium`
    background-size: 1600px;
  `};
`

const List = styled.div`
  position: relative;

  ${media.medium`
    display: flex;
    flex-wrap: wrap;
  `};
`

const Sale = styled.div`
  display: block;
  width: 100%;

  ${media.medium`
    flex-basis: 33.333%
  `};

  & + & {
    ${mediaDown.medium`
      margin-top: ${spacing.small};
    `};
  }
`

const SaleFigure = styled.img`
  width: 160px;
  margin: 0 auto ${spacing.large};
  filter: drop-shadow(0 22px 26px ${rgba(black, 0.25)});

  ${media.small`
    width: 200px;
  `};

  ${media.medium`
    width: 160px;
  `};
`

const SaleName = styled(H3)`
  margin-bottom: ${spacing.tiny};
`

const SalePrice = styled.strong`
  color: ${primaryColor};
  display: inline-block;
  font-size: 1.25em;
`

const PreviousSales = ({ sales }) => (
  <Container>
    <Wrapper>
      <Inner>
        <OrnamentBlock>
          <Title>Previous Bake Sales</Title>
          <Content>
            <List>
              {sales.map((sale, i) => (
                <Sale key={i}>
                  <SaleFigure src={require(`static/images/${sale.figure}.png`)} />
                  <SaleName>{sale.name}</SaleName>
                  <SalePrice>{sale.price}</SalePrice>
                </Sale>
              ))}
            </List>
          </Content>
        </OrnamentBlock>
      </Inner>
    </Wrapper>
    <Pattern />
  </Container>
)

PreviousSales.propTypes = {
  sales: array.isRequired
}

export default PreviousSales
