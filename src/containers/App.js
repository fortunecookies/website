import React, { Component } from 'react'
import { object } from 'prop-types'
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import Home from 'views/Home'
import Faqs from 'views/Faqs'
import HowToPlay from 'views/HowToPlay'

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
              <Route path="/how-to-play" exact component={HowToPlay} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
