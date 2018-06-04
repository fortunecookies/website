import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ThemeProvider } from 'styled-components'

import Layout from 'layouts/Layout'

const mapStateToProps = ({ store }) => ({
  storeStatus: store.status
})

@connect(mapStateToProps)
export default class App extends Component {
  static propTypes = {
    store: object.isRequired,
    persistor: object.isRequired,
    storeStatus: string.isRequired
  };

  render() {
    const { store, persistor, storeStatus } = this.props
    const isStoreClosed = storeStatus === 'closed'
    console.log(isStoreClosed)
    return (
      <Provider store={store}>
        <ThemeProvider
          theme={{
            isStoreClosed
          }}
        >
          <PersistGate persistor={persistor}>
            <Router>
              <Switch>
                <Route path="/" component={Layout} />
              </Switch>
            </Router>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    )
  }
}
