import React from 'react'
import styled from 'styled-components'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { white } from 'styles/colors'
import { H2 } from 'styles/typography'
import Wrapper from 'components/Wrapper'
import { ButtonLink } from 'components/button/Button'

const Container = styled.div`
  position: relative;
  background-color: ${white};
  width: 100%;
  overflow-x: hidden;
  padding-top: 0;
  padding-bottom: 3rem;

  ${media.small`
    padding-bottom: 4rem;
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
    padding-left: ${spacing.xLarge};
  `};

  ${media.large`
    padding-left: ${spacing.xxLarge};
  `};

  ${media.xLarge`
    padding-left: ${spacing.xxxLarge};
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
    max-width: 100%;
  `};
`

const LuckySaying = () => (
  <Container>
    <Wrapper>
      <Inner>
        <Figure><img src={require(`static/images/illustrations/elephant.png`)} /></Figure>
        <Content>
          <Title>Limited edition art</Title>
          <Subtitle>Every FortuneCookies batch also contains limited edition artwork. Buying a FortuneCookie entitles you to the rights to the associated digital art. This artwork is produced in collaboration with an artist.</Subtitle>
          <ButtonLink large to="/bake-sale/" primary>View bake sale</ButtonLink>
        </Content>
      </Inner>
    </Wrapper>
  </Container>
)

export default LuckySaying
