import React from 'react'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H2 } from 'styles/typography'
import { primaryColor, black } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import OrnamentBlock from 'components/OrnamentBlock'
import { ButtonLink } from 'components/button/Button'

const float = keyframes`
  from, to {
    transform: none;
  }

  65% {
    transform: translate(0, 5px);
  }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${primaryColor};
  background-image: radial-gradient(ellipse farthest-corner at center top, #fc920e 0%, #8f082d 100%);
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 4.375rem;
  padding-bottom: 3.25rem;

  ${media.large`
    ${verticalPadding`6.5rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`7.5rem`};
  `};
`

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Title = styled(H2)`
  margin-bottom: ${spacing.small};

  ${media.medium`
    margin-bottom: ${spacing.medium};
  `};
`

const Subtitle = styled.p`
  position: relative;

  ${media.medium`
    margin-bottom: ${spacing.large};
  `};
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 680px;
  margin: 0 auto;
  padding: 0 ${spacing.large} 3.75rem;

  ${media.small`
    padding: 0 8% 4rem;
  `};

  ${media.medium`
    padding: 0 6% 4.5rem;
  `};

  ${media.large`
    padding: 0 3% 5rem;
  `};
`

const Figure = styled.div`
  position: relative;
  z-index: 10;
  display: inline-block;
  width: 182px;
  margin-bottom: ${spacing.large};
  margin-top: -${spacing.xxLarge};
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 22px 26px ${rgba(black, 0.25)});

  ${media.medium`
    margin-bottom: ${spacing.xLarge};
    margin-top: -${spacing.xxxLarge};
  `};

  ${media.xLarge`
    margin-bottom: ${spacing.xxLarge};
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

const Overview = () => (
  <Container>
    <Wrapper>
      <Inner>
        <OrnamentBlock>
          <Figure>
            <img src={require(`static/images/illustrations/charm.png`)} />
          </Figure>
          <Content>
            <Title>What's a charm?</Title>
            <Subtitle>
              Every FortuneCookies batch is symbolized by a charm. This charm is the image that appears in your
              collectibles wallet and allows you to associate your FortuneCookie with a larger set, or generation.
            </Subtitle>
            <ButtonLink large to="/bake-sale/" primary>
              View bake sale
            </ButtonLink>
          </Content>
        </OrnamentBlock>
      </Inner>
    </Wrapper>
    <Pattern />
  </Container>
)

export default Overview
