import React from 'react'
import styled from 'styled-components'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H1 } from 'styles/typography'
import { white } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import { ButtonLink } from 'components/button/Button'
import ButtonGroup from 'components/button/ButtonGroup'

const Container = styled.div`
  width: 100%;
  background-color: ${white};
  ${verticalPadding`3rem`};

  ${media.small`
    ${verticalPadding`5rem`};
  `};

  ${media.medium`
    ${verticalPadding`6.5rem`};
  `};

  ${mediaDown.medium`
    text-align: center;
  `};

  ${media.large`
    ${verticalPadding`8rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`10rem`};
  `};
`

const Title = styled(H1)`
  margin-bottom: ${spacing.large};

  ${media.small`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.medium`
    margin-bottom: ${spacing.large};
    padding-right: ${spacing.xxLarge};
  `};

  ${media.large`
    padding-right: ${spacing.xxxLarge};
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
`

const Inner = styled.div`
  position: relative;

  ${mediaDown.medium`
    max-width: 620px;
    margin: 0 auto;
  `};

  ${media.medium`
    display: flex;
  `};
`

const Main = styled.main`
  ${media.medium`
    flex: 1;
    padding-right: ${spacing.large};
  `};

  ${media.large`
    padding-right: ${spacing.xLarge};
  `};

  ${media.xLarge`
    padding-right: ${spacing.xxLarge};
  `};
`

const MobileFigure = styled.figure`
  width: 100%;
  margin: 0 0 ${spacing.medium} 0;

  ${media.small`
    margin-bottom: ${spacing.large};
    padding: 0 ${spacing.large};
  `};

  ${media.medium`
    display: none;
  `};
`

const DesktopFigure = styled.figure`
  margin: 0;
  flex: 1;
  margin-right: -${spacing.medium};

  ${media.large`
    margin-right: -${spacing.large};
  `};

  ${mediaDown.medium`
    display: none;
  `};
`

const Hero = () => (
  <Container>
    <Wrapper>
      <Inner>
        <Main>
          <Title>Collect good luck charms on Ethereum</Title>
          <MobileFigure>
            <img src={require(`static/images/illustrations/hero.png`)} />
          </MobileFigure>
          <Subtitle>FortuneCookies are digital collectibles consisting of a charm, limited edition artwork, and a made-specifically-for-you lucky saying.</Subtitle>
          <ButtonGroup>
            <ButtonLink large to="/bake-sale/" primary>View bake sale</ButtonLink>
            <ButtonLink large to="/how-to-play/" secondary>How to play</ButtonLink>
          </ButtonGroup>
        </Main>
        <DesktopFigure>
          <img src={require(`static/images/illustrations/hero.png`)} />
        </DesktopFigure>
      </Inner>
    </Wrapper>
  </Container>
)

export default Hero
