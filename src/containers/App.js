import React, { Component } from 'react'
import { object } from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import Layout from 'layouts/Layout'

const mapStateToProps = ({ store }, props) => ({
  storeStatus: store.status
})

@connect(mapStateToProps)
export default class App extends Component {
  static propTypes = {
    store: object.isRequired,
    persistor: object.isRequired
  };

  render() {
    const { store, persistor } = this.props

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Route path="/" component={Layout} />
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
