import { setStoreStatus } from './actions'

const ACTION_HANDLERS = {
  [setStoreStatus]: (state, action) => ({
    ...state,
    status: action.payload
  })
}

const initialState = {
  status: 'closed'
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
