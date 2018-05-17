import React, { Fragment } from 'react'

import MobileNav from 'components/MobileNav'
import Hero from 'components/Hero'
import LuckySaying from 'components/LuckySaying'
import Overview from 'components/Overview'

const Home = () => (
  <Fragment>
    <Hero />
    <Overview />
    <LuckySaying />
    <MobileNav />
  </Fragment>
)

export default Home
