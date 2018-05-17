import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import { rgba, stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { greyDark, primaryColor, white, secondaryColor } from 'styles/colors'
import SmallCaps from 'components/SmallCaps'
import { media, mediaDown } from 'styles/media'

const Container = styled.div`
  position: relative;
  padding-top: ${spacing.small};

  ${media.medium`
    padding-left: ${spacing.xxLarge};
    padding-right: ${spacing.xxLarge};
  `};

  ${media.large`
    padding-left: 56px;
    padding-right: 56px;
  `};

  ${media.xLarge`
    padding-left: 7.5%;
    padding-right: 7.5%;
  `};
`

const StyledLink = SmallCaps.withComponent(NavLink).extend`
  position: relative;
  color: ${greyDark};
  text-align: center;
  padding: ${spacing.small} 0;

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
  transform: translateX(-50%);
  font-size: 10px;
  padding: ${spacing.tiny} ${stripUnit(spacing.medium) * 1.25 + 'px'};
  clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 10% 50%, 0 0);
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
`

const Divider = styled.img`
  flex-shrink: 0;

  ${mediaDown.medium`
    display: none;
  `};
`

const Cloud = styled(InlineSVG)`
  fill: ${secondaryColor};
  flex-shrink: 0;
  width: 142px;
  height: 21px;

  ${mediaDown.large`
    display: none;
  `};
`

const Lantern = styled.img`
  position: absolute;
  top: 72px;
  left: ${spacing.large};

  &:last-child {
    right: ${spacing.large};
    left: auto;
  }

  ${mediaDown.xLarge`
    display: none;
  `};
`

const Nav = () => (
  <Container>
    <List>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} />
      <StyledLink exact to="/how-to-play/">How to play</StyledLink>
      <Divider src="https://placehold.it/12x20" />
      <StyledLink exact to="/faqs/">FAQs</StyledLink>
      <LogoWrap to="/">
        <img src="https://placehold.it/182x127" />
      </LogoWrap>
      <StyledLink exact to="/bake-sale/">
        Bake Sale
        <Tag>Open</Tag>
      </StyledLink>
      <Divider src="https://placehold.it/12x20" />
      <StyledLink exact to="#">Sign In</StyledLink>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} />
    </List>
    <Lantern src="https://placehold.it/53x226" />
    <Lantern src="https://placehold.it/53x226" />
  </Container>
)

export default Nav
