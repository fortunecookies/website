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

const currentYear = new Date().getFullYear()

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${white};
  padding: 3rem ${spacing.large};
  ${verticalPadding`3rem`};

  ${media.small`
    padding: ${spacing.xLarge};
  `};

  ${media.medium`
    padding-left: 48px;
    padding-right: 48px;
  `} ${mediaDown.medium`
    text-align: center;
  `};
`

const Wrap = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;

  ${media.medium`
    padding: ${spacing.xxLarge} 0;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      background-color: #EA4150;
      top: 64px;
      bottom: 64px;
    }

    &:before {
      left: -1px;
    }

    &:after {
      right: -1px;
    }
  `};
`

const Inner = styled.div`
  position: relative;

  ${media.medium`
    padding: ${spacing.xLarge} 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url(${require('static/images/ornaments/top-left.png')}) top left no-repeat,
    url(${require('static/images/ornaments/top-right.png')}) top right no-repeat,
    url(${require('static/images/ornaments/bottom-left.png')}) bottom left no-repeat,
    url(${require('static/images/ornaments/bottom-right.png')}) bottom right no-repeat;
    background-size: 47px 35px;

    &:before,
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #EA4150;
      left: 44px;
      right: 44px;
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }
  `};

  ${media.large`
    padding: ${spacing.xLarge} 72px;
  `};

  ${media.xLarge`
    padding: ${spacing.xxLarge} 96px;
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
  `} ${media.medium`
    margin-bottom: 0;
    margin-right: ${spacing.medium};
  `};
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
    <Wrap>
      <Inner>
        <Main>
          <Copyright>Copyright {currentYear}, Consensys Inc.</Copyright>
          <FooterList>
            <FooterLink to="/terms/">Terms of Use</FooterLink>
            <FooterLink to="/privacy-policy/">Privacy Policy</FooterLink>
            <FooterLink to="/help/">Help & Support</FooterLink>
          </FooterList>
        </Main>
        <SocialList>
          <SocialLink href="https://twitter.com/FTNCookies" target="_blank">
            <Icon icon="twitter" brand />
          </SocialLink>
          <SocialLink href="https://t.me/ftncookies" target="_blank">
            <Icon icon="telegram" brand />
          </SocialLink>
          <SocialLink href="https://medium.com/fortunecookies" target="_blank">
            <Icon icon="medium" brand />
          </SocialLink>
        </SocialList>
      </Inner>
    </Wrap>
  </Container>
)

export default Footer
