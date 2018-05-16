import React from 'react'
import { Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { AsyncRoute } from 'layouts/asyncComponents'

import MobileNav from 'components/MobileNav'
import Footer from 'components/Footer'

const Layout = () => (
  <>
    <Switch>
      <AsyncRoute exact path="/" loader={() => import('views/Home')} />
      <AsyncRoute exact path="/faqs/" loader={() => import('views/Faqs')} />
      <AsyncRoute exact path="/how-to-play/" loader={() => import('views/HowToPlay')} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    <MobileNav />
  </>
)

export default Layout
