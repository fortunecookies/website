import React from 'react'

import AccountDetails from 'components/AccountDetails'

const MyAccount = () => (
  <>
    <AccountDetails
      charms={[
        {
          figure: 'gem',
          name: 'Dimension'
        },
        {
          figure: 'egg',
          name: 'Fortuna'
        },
        {
          figure: 'cookie',
          name: 'Genesis'
        }
      ]}
    />
  </>
)

export default MyAccount
