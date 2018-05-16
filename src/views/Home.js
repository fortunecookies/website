import React, { Fragment } from 'react'

import MobileNav from 'components/MobileNav'
import Hero from 'components/Hero'

const Home = () => (
  <Fragment>
    <Hero />
    <MobileNav visible />
  </Fragment>
)

export default Home
