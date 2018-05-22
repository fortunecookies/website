import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { H2 } from 'styles/typography'
import { primaryColor } from 'styles/colors'
import ProgressBar from 'components/ProgressBar'
import SmallCaps from 'components/SmallCaps'
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

  ${media.medium`
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

const SingleProduct = ({ lead, title, figure }) => (
  <Container>
    <Figure>{figure}</Figure>
    <Content>
      <Lead>{lead}</Lead>
      <Title>{title}</Title>
      <ProgressWrap>
        <ProgressBar progress={20} />
      </ProgressWrap>
      <Button primary large>Buy Now</Button>
    </Content>
  </Container>
)

SingleProduct.propTypes = {
  lead: string.isRequired,
  title: string.isRequired,
  figure: node.isRequired
}

export default SingleProduct
