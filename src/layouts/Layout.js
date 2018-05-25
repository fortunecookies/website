import React from 'react'
import { Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { AsyncRoute } from 'layouts/asyncComponents'
import Typekit from 'react-typekit'
import { Portal } from 'react-portal'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'

const Layout = () => (
  <>
    <Nav />
    <Switch>
      <AsyncRoute exact path="/" loader={() => import('views/Home')} />
      <AsyncRoute exact path="/faqs/" loader={() => import('views/Faqs')} />
      <AsyncRoute exact path="/how-to-play/" loader={() => import('views/HowToPlay')} />
      <AsyncRoute exact path="/bake-sale/" loader={() => import('views/BakeSale')} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    <MobileNav />
    <Portal>
      <Typekit kitId="eun2pom" />
    </Portal>
  </>
)

export default Layout
