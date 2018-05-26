import React from 'react'

import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import AccountDrawer from 'components/AccountDrawer'

const MyAccount = () => (
  <>
    <AccountDrawer />
    <Section>
      <Wrapper>
        <p>My Account</p>
      </Wrapper>
    </Section>
  </>
)

export default MyAccount
