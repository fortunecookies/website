import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Accordion from 'components/FAQAccordion'
import Header from 'components/Header'

const Faqs = () => (
  <Fragment>
    <Header
      title="FAQs"
    />
    <Section flushTop>
      <Wrapper narrow>

        <Accordion question="What are Fortune Cookies?">
          <p>FortunesCookies are collectible charms made with rare art and good luck on Ethereum. FortuneCookies are designed in collaboration with artists, issued as non-fungible tokens on Ethereum (ERC721), and sold in limited quantity batches to the public during official Bake Sales. Continue reading to learn more about FortuneCookies and how to buy them.</p>
          <strong>Batch Charm</strong>
          <p>Every FortuneCookies batch is symbolized by a charm. This charm is the icon that appears in your collectibles wallet and allows you to associate your FortuneCookie with a larger set, or generation.</p>
          <strong>Batch Artwork</strong>
          <p>Every FortuneCookies batch also contains limited edition artwork. Buying a FortuneCookie entitles you to the rights to the associated digital art. This artwork is produced in collaboration with an artist, and can be any type of file. Some have even likened us to being the Nike of cryptocollectibles.</p>
          <strong>Lucky Saying</strong>
          <p>Although FortuneCookies are produced in limited edition batches, each FortuneCookie contains a unique proverb that is made for you. The lucky saying is a provably unique string of text that is randomly assigned based on your Ethereum address, according to our on-chain oracle, called the Fortune Factory. Lucky sayings will be sourced from open-source libraries or solicited from the public. What it means is up to you! Click here to learn more about the Fortune Factory.</p>
        </Accordion>

        <Accordion question="Where Can I Buy FortuneCookies?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="How to Participate in the Bake Sale">
          <p>Answer</p>
        </Accordion>

        <Accordion question="How much do the artists make?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="Why can I only buy one Fortune Cookie per batch?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="What do I need to pay for a Fortune Cookie?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="How can I hold my Fortune Cookies?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="How does Fortune Cookies make money?">
          <p>Answer</p>
        </Accordion>

        <Accordion question="How did you build Fortune Cookies?">
          <p>Answer</p>
        </Accordion>

      </Wrapper>
    </Section>
  </Fragment>
)

export default Faqs
