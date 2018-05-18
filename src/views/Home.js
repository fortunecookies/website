import React, { Fragment } from 'react'

import MobileNav from 'components/MobileNav'
import Hero from 'components/Hero'
import LuckySaying from 'components/LuckySaying'
import LimitedEdition from 'components/LimitedEdition'
import Overview from 'components/Overview'

const Home = () => (
  <Fragment>
    <Hero />
    <Overview />
    <LimitedEdition />
    <LuckySaying />
    <MobileNav />
  </Fragment>
)

export default Home
