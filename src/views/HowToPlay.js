import React, { Fragment } from 'react'

import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Section from 'components/Section'

const HowToPlay = () => (
  <Fragment>
    <Header
      title="How to Play"
      subtitle="Batches of new Fortune Cookies are sold in Bake Sales. To participate in a Bake Sale, head to fortunecookies.io/bakesale and follow the instructions on screen. Here are some addition tips for a successfull Bake Sale."
    />
    <Section flushTop>
      <Wrapper narrow>
        How to goes here
      </Wrapper>
    </Section>
  </Fragment>
)

export default HowToPlay
