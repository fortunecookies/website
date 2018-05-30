import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { greyDark, primaryColor, white, secondaryColor } from 'styles/colors'
import { tinyFontSize } from 'styles/typography'
import SmallCaps from 'components/SmallCaps'
import { media, mediaDown } from 'styles/media'

const Container = styled.div`
  position: relative;
  z-index: 10;
  padding-top: ${spacing.small};

  ${media.medium`
    padding-top: ${spacing.xLarge};
    padding-left: 56px;
    padding-right: 56px;
  `};

  ${media.large`
    padding-left: 72px;
    padding-right: 72px;
  `};

  ${media.xLarge`
    padding-left: 7.5%;
    padding-right: 7.5%;
  `};
`

const StyledLink = SmallCaps.withComponent(NavLink).extend`
  position: relative;
  display: block;
  color: ${greyDark};
  text-align: center;
  padding: ${spacing.medium};

  &.${'active'} {
    color: ${primaryColor};
  }

  ${mediaDown.medium`
    display: none;
  `};
`

const Tag = styled.span`
  background-color: ${primaryColor};
  color: ${white};
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: -${spacing.small};
  transform: translateX(-50%);
  font-size: ${stripUnit(tinyFontSize) * 0.8 + 'px'};
  padding: ${spacing.tiny} ${stripUnit(spacing.medium) * 1.25 + 'px'};
  clip-path: polygon(100% 0%, 92% 50%, 100% 100%, 0 100%, 8% 50%, 0 0);
`

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.medium`
    justify-content: space-between;
  `};
`

const LogoWrap = styled(NavLink)`
  flex-shrink: 0;

  ${media.medium`
    transform: translateY(-${spacing.large});
  `};
`

const Logo = styled.img`
  width: 152px;
  height: 106px;
  display: block;

  ${media.small`
    width: 182px;
    height: 127px;
  `};
`

const Divider = styled.img`
  flex-shrink: 0;
  width: 12px;
  height: 20px;

  ${mediaDown.medium`
    display: none;
  `};
`

const Cloud = styled(InlineSVG)`
  fill: ${secondaryColor};
  flex-shrink: 0;
  width: 142px;
  height: 21px;

  &:first-child {
    transform: scaleX(-1);
  }

  ${mediaDown.large`
    display: none;
  `};
`

const Lantern = styled.img`
  position: absolute;
  top: ${spacing.xxLarge};
  left: ${spacing.small};
  width: 34px;
  height: 145px;

  ${media.medium`
    top: 86px;
    left: ${spacing.medium};
  `};

  ${media.large`
    width: 53px;
    height: 226px;
  `};

  ${media.xLarge`
    left: ${spacing.large};
  `};

  &:last-child {
    right: ${spacing.small};
    left: auto;

    ${media.medium`
      right: ${spacing.medium};
    `};

    ${media.xLarge`
      right: ${spacing.large};
    `};
  }
`

const Nav = () => (
  <Container>
    <List>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} raw />
      <StyledLink exact to="/how-to-play/">
        How to play
      </StyledLink>
      <Divider src={require(`static/images/ornaments/ethereum.png`)} />
      <StyledLink exact to="/faqs/">
        FAQs
      </StyledLink>
      <LogoWrap to="/">
        <Logo src={require(`static/images/logo.png`)} />
      </LogoWrap>
      <StyledLink exact to="/bake-sale/">
        Bake Sale
        <Tag>Open</Tag>
      </StyledLink>
      <Divider src={require(`static/images/ornaments/ethereum.png`)} />
      <StyledLink exact to="/my-account/">
        My Account
      </StyledLink>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} raw />
    </List>
    <Lantern src={require(`static/images/ornaments/lantern.png`)} />
    <Lantern src={require(`static/images/ornaments/lantern.png`)} />
  </Container>
)

export default Nav
