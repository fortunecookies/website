import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'

import * as spacing from 'styles/spacing'
import { greyDark, secondaryColor } from 'styles/colors'
import SmallCaps from 'components/SmallCaps'
import { media, mediaDown } from 'styles/media'

const Container = styled.div`
  position: relative;
  padding-top: ${spacing.small};

  ${media.medium`
    padding-left: ${spacing.large};
    padding-right: ${spacing.large};
  `};

  ${media.large`
    padding-left: 72px;
    padding-right: 72px;
  `};

  ${media.xLarge`
    padding-left: 100px;
    padding-right: 100px;
  `};
`

const StyledLink = SmallCaps.withComponent(NavLink).extend`
  color: ${greyDark};
  flex: 1;
  text-align: center;
  padding: ${spacing.xLarge} 0;

  ${media.large`
    padding: ${spacing.xxLarge} 0;
  `};

  ${mediaDown.medium`
    display: none;
  `};
`

const List = styled.div`
  display: flex;
  align-items: center;
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
      <StyledLink exact to="/bake-sale/">Bake Sale</StyledLink>
      <Divider src="https://placehold.it/12x20" />
      <StyledLink exact to="#">Sign In</StyledLink>
      <Cloud src={require(`static/images/ornaments/cloud.svg`)} />
    </List>
  </Container>
)

export default Nav
