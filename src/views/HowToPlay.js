import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Section from 'components/Section'

const HowToPlay = () => (
  <Fragment>
    <Header
      title="How to Play"
      subtitle={
        <span>Batches of new Fortune Cookies are sold in Bake Sales. To participate in a Bake Sale, head to <Link to="/bake-sale">fortunecookies.io/bakesale</Link> and follow the instructions on screen. Here are some addition tips for a successfull Bake Sale.</span>
      }
    />
    <Section flushTop>
      <Wrapper narrow>
        How to goes here
      </Wrapper>
    </Section>
  </Fragment>
)

export default HowToPlay
