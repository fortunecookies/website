import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { H1 } from 'styles/typography'
import { white } from 'styles/colors'
import Wrapper from 'components/Wrapper'

const Container = styled.div`
  width: 100%;
  background-color: ${white};
  text-align: center;
  ${verticalPadding`3rem`};

  ${media.small`
    ${verticalPadding`4rem`};
  `};

  ${media.medium`
    ${verticalPadding`5rem`};
  `};

  ${media.large`
    ${verticalPadding`6rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`7.5rem`};
  `};
`

const Title = styled(H1)`
  margin-bottom: ${spacing.small};

  ${media.small`
    margin-bottom: ${spacing.medium};
  `};

  ${media.xLarge`
    margin-bottom: ${spacing.large};
  `};
`

const Subtitle = styled.p`
  position: relative;
  max-width: 540px;
  margin: 0 auto;

  ${media.medium`
    max-width: 640px;
  `};

  ${media.large`
    max-width: 740px;
  `};
`

const Header = ({ title, subtitle }) => (
  <Container>
    <Wrapper narrow>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  </Container>
)

Header.propTypes = {
  title: string.isRequired,
  subtitle: node
}

export default Header
