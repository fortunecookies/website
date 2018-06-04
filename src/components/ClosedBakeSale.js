import React from 'react'
import styled from 'styled-components'

import { media } from 'styles/media'
import { H2 } from 'styles/typography'
import { white } from 'styles/colors'
import Section, { SectionBlock } from 'components/Section'
import Wrapper from 'components/Wrapper'
import Countdown from 'components/Countdown'

const Figure = styled.div`
  width: 240px;
  margin: 0 auto;

  ${media.small`
    width: 280px;
  `};

  ${media.medium`
    width: 300px;
  `};

  ${media.large`
    width: 330px;
  `};

  ${media.xLarge`
    width: 360px;
  `};
`

const Title = styled(H2)`
  color: ${white};
  max-width: 440px;
  margin: 0 auto;

  ${media.large`
    max-width: 640px;
  `};
`

const ClosedBakeSale = () => (
  <Section center>
    <Wrapper>
      <SectionBlock>
        <Figure>
          <img src={require(`static/images/charm.png`)} />
        </Figure>
      </SectionBlock>

      <SectionBlock>
        <Title>Sorry, the Bake Sale is currently closed</Title>
      </SectionBlock>

      <SectionBlock>
        <Countdown />
      </SectionBlock>
    </Wrapper>
  </Section>
)

export default ClosedBakeSale
