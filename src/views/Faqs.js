import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Question from 'components/FAQAccordion'
import Header from 'components/Header'
import faq from 'static/faq'

const Faqs = () => (
  <Fragment>
    <Header
      title="FAQs"
    />
    <Section flushTop>
      <Wrapper narrow>
        {faq.map(({question, answer}) => (
          <Question question={question}>
            <p>{answer}</p>
          </Question>
        ))}
      </Wrapper>
    </Section>
  </Fragment>
)

export default Faqs
