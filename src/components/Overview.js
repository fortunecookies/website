import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H1 } from 'styles/typography'
import { primaryColor, white, black } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import { ButtonLink } from 'components/button/Button'

const Container = styled.div`
  width: 100%;
  background-color: ${primaryColor};
  background-image: radial-gradient(ellipse farthest-corner at center top, #FC920E 0%, #8F082D 100%);
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

const Title = styled(H1)`
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

const Inner = styled.div`
  position: relative;
  background-color: ${white};
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 8px 22px 0 ${rgba(black, 0.4)};
`

const Content = styled.div`
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
  display: inline-block;
  width: 200px;
  margin-bottom: ${spacing.medium};
  margin-top: -${spacing.xxLarge};

  ${media.medium`
    margin-bottom: ${spacing.large};
    margin-top: -${spacing.xxxLarge};
  `};
`

const Hero = () => (
  <Container>
    <Wrapper>
      <Inner>
        <Figure><img src="https://placehold.it/200x200" /></Figure>
        <Content>
          <Title>What's a charm?</Title>
          <Subtitle>Every FortuneCookies batch is symbolized by a charm. This charm is the image that appears in your collectibles wallet and allows you to associate your FortuneCookie with a larger set, or generation.</Subtitle>
          <ButtonLink large to="/bake-sale/" primary>View bake sale</ButtonLink>
        </Content>
      </Inner>
    </Wrapper>
  </Container>
)

export default Hero
