import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { Switch } from 'react-router'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AsyncRoute } from 'layouts/asyncComponents'
import { ThemeProvider } from 'styled-components'

import Nav from 'components/Nav'
import Page from 'components/Page'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'

const mapStateToProps = ({ store }, { location }) => ({
  storeStatus: store.status,
  location
})

@connect(mapStateToProps)
class Layout extends Component {
  static propTypes = {
    location: object.isRequired,
    storeStatus: string.isRequired
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scroll(0, 0)
    }
  }

  render() {
    const { location, storeStatus } = this.props
    console.log(location)
    const isStoreClosed = location.pathname.includes('bake-sale') && storeStatus === 'closed'
    return (
      <ThemeProvider theme={{ isStoreClosed }}>
        <Page>
          <Nav />
          <Switch>
            <AsyncRoute exact path="/" loader={() => import('views/Home')} />
            <AsyncRoute exact path="/faqs/" loader={() => import('views/Faqs')} />
            <AsyncRoute exact path="/how-to-play/" loader={() => import('views/HowToPlay')} />
            <AsyncRoute exact path="/bake-sale/" loader={() => import('views/BakeSale')} />
            <AsyncRoute exact path="/my-account/" loader={() => import('views/MyAccount')} />
            <AsyncRoute exact path="/terms/" loader={() => import('views/Terms')} />
            <AsyncRoute exact path="/privacy-policy/" loader={() => import('views/Privacy')} />
            <AsyncRoute exact path="/help/" loader={() => import('views/Help')} />
            <Redirect to="/" />
          </Switch>
          <Footer />
          <MobileNav />
        </Page>
      </ThemeProvider>
    )
  }
}

export default Layout
