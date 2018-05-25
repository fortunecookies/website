import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'
import { H2, tinyFontSize } from 'styles/typography'
import { primaryColor } from 'styles/colors'
import SmallCaps from 'components/SmallCaps'

const Container = styled.div`
  text-align: left;

  ${mediaDown.medium`
    margin-bottom: ${spacing.large};
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
  margin-bottom: ${spacing.medium};
`

const Description = styled.p`
  position: relative;
  max-width: 560px;

  ${media.medium`
    max-width: 400px;
    margin-bottom: ${spacing.large};
  `};
`

const Item = styled(SmallCaps)`
  font-size: ${tinyFontSize};
  display: block;

  a {
    display: block;
  }

  & + & {
    margin-top: ${spacing.small};
  }
`

const AboutBlock = ({ lead, title, description, children }) => (
  <Container>
    <Lead>{lead}</Lead>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {children.map((item, i) => <Item key={i}>{item}</Item>)}
  </Container>
)

AboutBlock.propTypes = {
  lead: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  children: node
}

export default AboutBlock
