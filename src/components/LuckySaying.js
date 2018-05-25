import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H2 } from 'styles/typography'
import Wrapper from 'components/Wrapper'
import { ButtonLink } from 'components/button/Button'

const Container = styled.div`
  position: relative;
  background-color: ${rgba('#F7F3EB', 0.4)};
  width: 100%;
  overflow-x: hidden;
  ${verticalPadding`3rem`};

  ${media.small`
    ${verticalPadding`4rem`};
  `};

  ${mediaDown.medium`
    text-align: center;
  `};

  ${media.medium`
    ${verticalPadding`5rem`};
  `};

  ${media.large`
    ${verticalPadding`6.5rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`7.5rem`};
  `};
`

const Title = styled(H2)`
  margin-bottom: ${spacing.small};

  ${media.medium`
    margin-bottom: ${spacing.medium};
  `};
`

const Subtitle = styled.p`
  position: relative;
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

const Inner = styled.div`
  position: relative;

  ${media.medium`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  `};
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  margin: 0 auto;

  ${mediaDown.medium`
    max-width: 500px;
  `};

  ${media.medium`
    width: 50%;
    padding-right: ${spacing.xLarge};
  `};

  ${media.large`
    padding-right: ${spacing.xxLarge};
  `};

  ${media.xLarge`
    padding-right: ${spacing.xxxLarge};
  `};
`

const Figure = styled.div`
  margin-left: -${spacing.xxLarge};
  margin-right: -${spacing.xxLarge};
  margin-bottom: ${spacing.xLarge};

  ${media.small`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${spacing.xxLarge};
    max-width: 420px;
  `};

  ${media.medium`
    flex: 1;
    margin-right: -${spacing.large};
    max-width: 100%;
  `};

  ${media.large`
    margin-right: -${spacing.xLarge};
  `};

  ${media.xLarge`
    margin-right: -${spacing.xxLarge};
  `};
`

const LuckySaying = () => (
  <Container>
    <Wrapper>
      <Inner>
        <Figure>
          <img src={require(`static/images/illustrations/elephant.png`)} />
        </Figure>
        <Content>
          <Title>Your lucky saying</Title>
          <Subtitle>
            Although FortuneCookies are produced in limited edition batches, each FortuneCookie contains a unique
            proverb that is made for you.
          </Subtitle>
          <ButtonLink large to="/bake-sale/" primary>
            View bake sale
          </ButtonLink>
        </Content>
      </Inner>
    </Wrapper>
  </Container>
)

export default LuckySaying
