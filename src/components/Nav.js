import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { greyDark, primaryColor, borderColor, white, secondaryColor } from 'styles/colors'
import { tinyFontSize } from 'styles/typography'
import { boxShadow, borderRadius, animationTime, animationCurve } from 'styles/global'
import SmallCaps from 'components/SmallCaps'
import Icon from 'components/Icon'
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${greyDark};
  text-align: center;
  padding: ${spacing.medium};
  transition: opacity ${animationTime} ${animationCurve};

  ${media.xLarge`
    width: 156px;
  `};

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &.${'active'} {
    color: ${primaryColor};

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  ${mediaDown.medium`
    display: none;
  `};
`

const DropdownTrigger = StyledLink.withComponent('button').extend`
  position: relative;
  transition: opacity ${animationTime} ${animationCurve};

  &:hover,
  &:focus {
    opacity: 0.7;
  }
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

const DropdownWrapper = styled.div`
  position: relative;

  ${mediaDown.medium`
    display: none;
  `};
`

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: -${spacing.small};
  width: 190px;
  margin-top: -${spacing.small};
  padding: ${spacing.large};
  background-color: ${white};
  border-radius: ${borderRadius};
  text-align: left;
  border: 1px solid ${borderColor};
  opacity: 0;
  transform: perspective(450px) rotateX(-15deg);
  transform-origin: 50% 0;
  transition: opacity ${animationTime} ${animationCurve}, transform ${animationTime} ${animationCurve};
  z-index: 20;
  ${boxShadow};

  > * + * {
    margin-top: ${stripUnit(spacing.small) * 1.5 + 'px'};
  }

  ${DropdownWrapper}:hover & {
    opacity: 1;
    transform: none;
  }
`

const DropdownLink = StyledLink.extend`
  padding: 0;
  text-align: left;
  display: block;
  width: 100%;
`

const DropdownButton = DropdownLink.withComponent('button').extend`
  position: relative;
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
      <DropdownWrapper>
        <DropdownTrigger>
          My Account
          <Icon icon="dropdown" />
        </DropdownTrigger>
        <Dropdown>
          <DropdownLink exact to="/my-account/">
            My Fortunes
          </DropdownLink>
          <DropdownButton>Sign out</DropdownButton>
        </Dropdown>
      </DropdownWrapper>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} raw />
    </List>
    <Lantern src={require(`static/images/ornaments/lantern.png`)} />
    <Lantern src={require(`static/images/ornaments/lantern.png`)} />
  </Container>
)

export default Nav
