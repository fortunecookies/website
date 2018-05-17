import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { H3 } from 'styles/typography'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Section, { SectionBlock } from 'components/Section'
import HowToStep from 'components/HowToStep'

const HowToPlay = () => (
  <Fragment>
    <Header
      title="How to Play"
      subtitle={
        <span>Batches of new Fortune Cookies are sold in Bake Sales. To participate in a Bake Sale, head to <Link to="/bake-sale">fortunecookies.io/bakesale</Link> and follow the instructions on screen. Here are some addition tips for a successfull Bake Sale.</span>
      }
    />
    <Section flushTop center>
      <Wrapper narrow>
        <SectionBlock>
          <H3>Rules of the Bake Sale</H3>
        </SectionBlock>
        <SectionBlock>
          <HowToStep>
            <p>Follow the official FortuneCookies Twitter, Telegram, and Medium accounts to stay informed on when new batches will go on sale, and other details about the batch. We will announce the start of the Bake Sale a week before the launch on all official channels.</p>
          </HowToStep>
          <HowToStep>
            <p>Bake Sales begin at a pre-announced block number and go live when the Bake Sale page on our website becomes active.</p>
          </HowToStep>
          <HowToStep>
            <p>Individual FortuneCookie auctions begin at a high price and ends at a low price. Each individual auction lasts 30 minutes, or until the FortuneCookie is purchased — whichever comes first.</p>
          </HowToStep>
        </SectionBlock>
      </Wrapper>
    </Section>
  </Fragment>
)

export default HowToPlay
