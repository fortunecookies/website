import React from 'react'
import styled from 'styled-components'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { primaryColor, white } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import SmallCaps from 'components/SmallCaps'
import OrnamentBlock from 'components/OrnamentBlock'
import Section from 'components/Section'

const Container = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${primaryColor};
  background-image: linear-gradient(226deg, #D50038 0%, #870023 100%);
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
  padding: ${spacing.large};

  ${media.small`
    padding: ${spacing.xLarge};
  `};

  ${media.medium`
    padding: ${spacing.xxLarge};
  `};

  ${media.large`
    padding: 64px 56px 80px;
  `};

  ${media.xLarge`
    padding: 72px 80px 80px;
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

const PreviousSales = () => (
  <Container>
    <Wrapper>
      <Inner>
        <OrnamentBlock>
          <Title>Previous Bake Sales</Title>
          <Content>
            <p>Previous sales go here</p>
          </Content>
        </OrnamentBlock>
      </Inner>
    </Wrapper>
    <Pattern />
  </Container>
)

export default PreviousSales
