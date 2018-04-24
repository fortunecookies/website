import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'

// ========================================================
// Store
// ========================================================
const initialState = window.___INITIAL_STATE__
const { persistor, store } = createStore(initialState)

// ========================================================
// Render
// ========================================================
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} persistor={persistor} />
    </AppContainer>,
    MOUNT_NODE
  )
}

// ========================================================
// HMR
// ========================================================

if (__DEV__) {
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

// ========================================================
// Go!
// ========================================================
render()
