import React from 'react'
import styled from 'styled-components'
import { string, array } from 'prop-types'

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
  margin-bottom: ${spacing.medium};
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

  & + & {
    margin-top: ${spacing.small};
  }
`

const AboutBlock = ({ lead, title, description, meta }) => (
  <Container>
    <Lead>{lead}</Lead>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {meta.map((item, i) =>
      <Item key={i}>{item.text}</Item>
    )}
  </Container>
)

AboutBlock.propTypes = {
  lead: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  meta: array
}

export default AboutBlock
