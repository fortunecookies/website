import React, { Component, Fragment } from 'react'
import { object } from 'prop-types'
import { Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { AsyncRoute } from 'layouts/asyncComponents'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'

class Layout extends Component {
  static propTypes = {
    location: object.isRequired
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scroll(0, 0)
    }
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <AsyncRoute exact path="/" loader={() => import('views/Home')} />
          <AsyncRoute exact path="/faqs/" loader={() => import('views/Faqs')} />
          <AsyncRoute exact path="/how-to-play/" loader={() => import('views/HowToPlay')} />
          <AsyncRoute exact path="/bake-sale/" loader={() => import('views/BakeSale')} />
          <AsyncRoute exact path="/my-account/" loader={() => import('views/MyAccount')} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        <MobileNav />
      </Fragment>
    )
  }
}

export default Layout
