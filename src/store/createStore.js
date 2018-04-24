import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import fsaThunk from 'redux-fsa-thunk'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [fsaThunk, thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false // This prevents replaying the whole action history on reducer HMR
    })

    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware), ...enhancers))
  const persistor = persistStore(store) // HMR is not yet available for redux-persist

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const newReducer = require('./reducer').default
      store.replaceReducer(newReducer)
    })
  }

  return { persistor, store }
}
