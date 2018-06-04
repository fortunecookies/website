import React from 'react'
import styled from 'styled-components'
import { rgba, stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { H2 } from 'styles/typography'
import { primaryColor, grey, white, greyDark } from 'styles/colors'
import SmallCaps from 'components/SmallCaps'

const Container = styled.div`
  position: relative;
`

const Inner = styled.div`
  display: inline-flex;
  margin: 0 -${spacing.small};

  ${media.medium`
    margin: 0  -${stripUnit(spacing.small) * 1.5 + 'px'};
  `};
`

const Title = styled(SmallCaps)`
  color: ${primaryColor};
  margin-bottom: ${stripUnit(spacing.small) * 1.5 + 'px'};
  display: block;

  ${media.medium`
    margin-bottom: ${spacing.medium};
  `};
`

const Label = styled(SmallCaps)`
  color: ${props => (props.theme.isStoreClosed ? rgba(white, 0.5) : rgba(grey, 0.5))};
`

const Number = styled(H2)`
  margin-bottom: 0;
  font-size: 32px;
  color: ${props => (props.theme.isStoreClosed ? white : greyDark)};
  ${media.small`font-size: 36px`};
  ${media.medium`font-size: 42px`};
  ${media.large`font-size: 48px`};
`

const Item = styled.div`
  text-align: center;
  margin: 0 ${spacing.small};

  ${mediaDown.medium`
    width: 64px;
  `};

  ${media.medium`
    margin: 0 ${stripUnit(spacing.small) * 1.5 + 'px'};
  `};
`

const Countdown = () => (
  <Container>
    <Title>Time remaining</Title>
    <Inner>
      <Item>
        <Number>14</Number>
        <Label>Hours</Label>
      </Item>
      <Item>
        <Number>42</Number>
        <Label>Minutes</Label>
      </Item>
      <Item>
        <Number>52</Number>
        <Label>Seconds</Label>
      </Item>
    </Inner>
  </Container>
)

export default Countdown
