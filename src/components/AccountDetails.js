import React from 'react'
import styled from 'styled-components'
import { array } from 'prop-types'
import { rgba } from 'polished'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import Section, { SectionBlock } from 'components/Section'
import { H2, H3 } from 'styles/typography'
import { black } from 'styles/colors'
import { animationTime, animationCurve } from 'styles/global'
import Wrapper from 'components/Wrapper'
import GridRow from 'components/grid/GridRow'
import GridItem from 'components/grid/GridItem'
// import Button from 'components/button/Button'

// const Title = styled(H2)`
//   margin-bottom: ${spacing.medium};

//   ${media.medium`
//     margin-bottom: ${spacing.large};
//   `};
// `

// const EmptyState = styled.div`
//   max-width: 520px;
//   margin: 0 auto;
// `

const Charm = styled.button`
  display: block;
  width: 100%;
  transition: opacity ${animationTime} ${animationCurve}, transform ${animationTime} ${animationCurve};

  &:hover,
  &:focus {
    transform: translateY(-4px);
    opacity: 0.8;
  }
`

const CharmFigure = styled.img`
  width: 160px;
  margin: 0 auto ${spacing.large};
  filter: drop-shadow(0 22px 26px ${rgba(black, 0.25)});

  ${media.medium`
    width: 200px;
  `};
`

const AccountDetails = ({ charms }) => (
  <Section center>
    <Wrapper>
      {/* <EmptyState>
        <Title>You don't have any good fortune charms yet :(</Title>
        <Button secondary>Sign Out</Button>
      </EmptyState> */}
      <SectionBlock>
        <H2>Your good fortune charms</H2>
      </SectionBlock>

      <SectionBlock>
        <GridRow>
          {charms.map((charm, i) => (
            <GridItem xs="1-1" sm="1-2" md="1-3">
              <Charm key={i}>
                <CharmFigure src={require(`static/images/${charm.figure}.png`)} />
                <H3>{charm.name}</H3>
              </Charm>
            </GridItem>
          ))}
        </GridRow>
      </SectionBlock>
    </Wrapper>
  </Section>
)

AccountDetails.propTypes = {
  charms: array.isRequired
}

export default AccountDetails
