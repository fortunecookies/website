import { persistCombineReducers } from 'redux-persist'
import localForage from 'localforage'
import { reducer as form } from 'redux-form'

import store from './store/reducer'

const config = {
  key: 'root',
  storage: localForage,
  blacklist: ['form']
}

export default persistCombineReducers(config, {
  form,
  store
})
