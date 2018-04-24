import { persistCombineReducers } from 'redux-persist'
import localForage from 'localforage'
import { reducer as form } from 'redux-form'

import stores from './stores/reducer'
import auth from './auth/reducer'

const config = {
  key: 'root',
  storage: localForage,
  blacklist: ['form']
}

export default persistCombineReducers(config, {
  form,
  stores,
  auth
})
