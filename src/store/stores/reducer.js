import { increment, double } from './actions'

const ACTION_HANDLERS = {
  [increment]: (state, action) => state + action.payload,
  [double]: (state, action) => state * 2
}

const initialState = {
  1: {
    id: 1,
    name: 'Esso',
    address: '833 Markham Road',
    location: {
      lat: 45.51483894344,
      lng: -73.5238472343
    },
    erp: 23453,
    orderDay: 4,
    email: 'store123@esso.com',
    phone: '514 567-9890'
  },
  2: {
    id: 2,
    name: 'Esso',
    address: '3414 av du Parc',
    location: {
      lat: 45.51483892334,
      lng: -73.5938472233
    },
    erp: 23453,
    orderDay: 5,
    email: 'store123@esso.com',
    phone: '514 567-9890'
  },
  3: {
    id: 3,
    name: 'Esso',
    address: '833 Markham Road',
    location: {
      lat: 45.51483894334,
      lng: -73.5738892343
    },
    erp: 23453,
    orderDay: 2,
    email: 'store123@esso.com',
    phone: '514 567-9890'
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
