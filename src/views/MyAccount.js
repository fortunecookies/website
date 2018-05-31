import React from 'react'

import AccountDetails from 'components/AccountDetails'
import CharmModal from 'components/Modal/CharmModal'

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
    <CharmModal quote="Don't pursue happiness. Create it." numbers="0, 1, 10" figure="artwork.jpg" />
  </>
)

export default MyAccount
