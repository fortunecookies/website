import React, { Fragment } from 'react'

import MobileNav from 'components/MobileNav'
import Hero from 'components/Hero'
import Overview from 'components/Overview'

const Home = () => (
  <Fragment>
    <Hero />
    <Overview />
    <MobileNav />
  </Fragment>
)

export default Home
