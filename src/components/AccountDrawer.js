import React from 'react'
import styled from 'styled-components'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H2 } from 'styles/typography'
import { white, black } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import Button from 'components/button/Button'

const Container = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(46deg, #454545 0%, ${black} 100%);
  margin-top: ${spacing.large};
  ${verticalPadding`2.5rem`};

  ${media.small`
    ${verticalPadding`3rem`};
  `};

  ${media.medium`
    ${verticalPadding`3.5rem`};
  `};

  ${media.large`
    ${verticalPadding`4rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`4.5rem`};
  `};
`

const Title = styled(H2)`
  color: ${white};
  margin-bottom: ${spacing.medium};

  ${media.medium`
    margin-bottom: ${spacing.large};
  `};
`

const EmptyState = styled.div`
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
`

const AccountDrawer = () => (
  <Container>
    <Wrapper>
      <EmptyState>
        <Title>You don't have any good fortune charms yet :(</Title>
        <Button tertiary>Sign Out</Button>
      </EmptyState>
    </Wrapper>
  </Container>
)

export default AccountDrawer
