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
          <HowToSteps
            steps={[
              {
                text: 'Follow the official FortuneCookies Twitter, Telegram, and Medium accounts to stay informed on when new batches will go on sale, and other details about the batch. We will announce the start of the Bake Sale a week before the launch on all official channels.'
              },
              {
                text: 'Bake Sales begin at a pre-announced block number and go live when the Bake Sale page on our website becomes active.'
              },
              {
                text: "Individual FortuneCookie auctions begin at a high price and ends at a low price. Each individual auction lasts 30 minutes, or until the FortuneCookie is purchased — whichever comes first."
              },
              {
                text: "The first person to pay the current price or higher wins the FortuneCookie. Payment can be sent from any Ethereum mainnet wallet address. "
              },
              {
                text: "Players that submitted a bid, but who did not win the action, will receive a refund of their funds."
              },
              {
                text: "Individual FortuneCookies are priced according the the mean of the last 5 prices paid. The price is essentially set by the market. You can learn more about our pricing mechanism here."
              },
              {
                text: "If the auction ends and the FortuneCookie has not been sold, the FortuneCookie is donated back to the FortuneCookies company."
              },
              {
                text: "Bake Sales end when all individual FortuneCookies in the batch have been sold or expire."
              },
              {
                text: "Players are limited to one FortuneCookie per address per batch."
              },
              {
                text: "Good luck!"
              }
            ]}
          />
        </SectionBlock>
      </Wrapper>
    </Section>
  </Fragment>
)

export default HowToPlay
