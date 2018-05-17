import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { stripUnit } from 'polished'

import { media, mediaDown } from 'styles/media'
import { verticalPadding } from 'styles/global'
import { white } from 'styles/colors'
import { tinyFontSize, fontBold } from 'styles/typography'
import * as spacing from 'styles/spacing'
import Icon from 'components/Icon'

const Container = styled.div`
  width: 100%;
  background-color: ${white};
  padding: 3rem ${spacing.large};
  ${verticalPadding`3rem`};

  ${media.small`
    padding: 4rem ${spacing.xLarge};
  `};

  ${media.medium`
    padding: 3rem ${spacing.xxLarge};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};

  ${mediaDown.medium`
    text-align: center;
  `};
`

const Main = styled.main`
  position: relative;

  ${mediaDown.medium`
    margin-bottom: ${spacing.large};
  `};

  ${media.medium`
    display: flex;
    align-items: baseline;
  `};
`

const Copyright = styled.small`
  display: block;
  font-size: ${tinyFontSize};

  ${media.small`
    margin-bottom: ${spacing.tiny};
  `}

  ${media.medium`
    margin-bottom: 0;
    margin-right: ${spacing.medium};
  `}
`

const FooterList = styled.div`
  display: inline-flex;
  margin: 0 -${spacing.tiny};

  ${media.small`
    margin: 0 -${stripUnit(spacing.tiny) * 1.5 + 'px'};
  `};
`

const FooterLink = styled(Link)`
  margin: 0 ${spacing.tiny};
  font-weight: ${fontBold};
  font-size: ${tinyFontSize};

  ${media.small`
    margin: 0 ${stripUnit(spacing.tiny) * 1.5 + 'px'};
  `};
`

const SocialList = styled.div`
  display: inline-flex;
  margin: -${spacing.small};
`

const SocialLink = styled.a`
  padding: ${spacing.small};
`

const Footer = () => (
  <Container>
    <Main>
      <Copyright>Copyright 2018, Consensys Inc.</Copyright>
      <FooterList>
        <FooterLink to="/terms/">Terms of Use</FooterLink>
        <FooterLink to="/privacy-policy/">Privacy Policy</FooterLink>
        <FooterLink to="/about/">About</FooterLink>
        <FooterLink to="/help/">Help & Support</FooterLink>
      </FooterList>
    </Main>
    <SocialList>
      <SocialLink href="https://www.twitter.com" target="_blank"><Icon icon="twitter" brand /></SocialLink>
      <SocialLink href="https://www.telegram.com" target="_blank"><Icon icon="telegram" brand /></SocialLink>
      <SocialLink href="https://www.medium.com" target="_blank"><Icon icon="medium" brand /></SocialLink>
    </SocialList>
  </Container>
)

export default Footer
