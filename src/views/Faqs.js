import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Question from 'components/FAQAccordion'
import faq from 'static/faq'

const Faqs = () => (
  <Fragment>
    <Wrapper narrow>
      {faq.map(({question, answer}) => (
        <Question question={question}>
          <p>{answer}</p>
        </Question>
      ))}
    </Wrapper>
  </Fragment>
)

export default Faqs
