import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { H3 } from 'styles/typography'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Section, { SectionBlock } from 'components/Section'
import HowToSteps from 'components/HowToSteps'

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
          <HowToSteps>
            <p>Follow the official FortuneCookies <a href="https://twitter.com/FTNCookies" target="_blank">Twitter</a>, <a href="https://t.me/ftncookies" target="_blank">Telegram</a>, and <a href="https://medium.com/fortunecookies" target="_blank">Medium</a> accounts to stay informed on when new batches will go on sale, and other details about the batch. We will announce the start of the Bake Sale a week before the launch on all official channels.</p>
            <p>Bake Sales begin at a pre-announced block number and go live when the Bake Sale page on our website becomes active.</p>
            <p>Individual FortuneCookie auctions begin at a high price and ends at a low price. Each individual auction lasts 30 minutes, or until the FortuneCookie is purchased — whichever comes first.</p>
            <p>The first person to pay the current price or higher wins the FortuneCookie. Payment can be sent from any Ethereum mainnet wallet address. </p>
            <p>Players that submitted a bid, but who did not win the action, will receive a refund of their funds.</p>
            <p>Individual FortuneCookies are priced according the the mean of the last 5 prices paid. The price is essentially set by the market. You can learn more about our pricing mechanism here.</p>
            <p>If the auction ends and the FortuneCookie has not been sold, the FortuneCookie is donated back to the FortuneCookies company.</p>
            <p>Bake Sales end when all individual FortuneCookies in the batch have been sold or expire.</p>
            <p>Players are limited to one FortuneCookie per address per batch.</p>
            <p>Good luck!</p>
          </HowToSteps>
        </SectionBlock>
      </Wrapper>
    </Section>
  </Fragment>
)

export default HowToPlay
