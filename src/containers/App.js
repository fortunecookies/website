import React, { Component } from 'react'
import { object } from 'prop-types'
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import Home from 'views/Home'
import Faqs from 'views/Faqs'

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
              <Route path="/" exact component={Home} />
              <Route path="/faqs" exact component={Faqs} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
