import React, { Component } from 'react'
import { object } from 'prop-types'
import { Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { AsyncRoute } from 'layouts/asyncComponents'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

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
            <Switch>
              <AsyncRoute path="/" loader={() => import('views/Home')} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
