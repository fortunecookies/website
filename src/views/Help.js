import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Header from 'components/Header'

const Help = () => (
  <Fragment>
    <Header title="Help & Support" />
    <Section flushTop>
      <Wrapper narrow>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis
          interdum. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <p>
          Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </p>
      </Wrapper>
    </Section>
  </Fragment>
)

export default Help
