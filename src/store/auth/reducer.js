import {
  login,
  logout,
  requestLogin,
  setTracker,
  setCoords,
  enableTracking,
  disableTracking,
  setNotificationPermission
} from './actions'

const ACTION_HANDLERS = {
  [requestLogin]: (state, action) => ({
    ...state,
    loading: true
  }),
  [login]: (state, action) => ({
    ...state,
    loggedIn: true,
    loading: false,
    user: action.payload
  }),

  [logout]: ({ tracker }) => {
    window.navigator.geolocation.clearWatch(tracker)
    return {
      ...initialState,
      loggedIn: false
    }
  },
  [enableTracking]: state => ({
    ...state,
    user: {
      ...state.user,
      trackingAllowed: true
    }
  }),
  [setTracker]: (state, action) => ({
    ...state,
    tracker: action.payload
  }),
  [setCoords]: (state, action) => ({
    ...state,
    tracking: action.payload
  }),
  [disableTracking]: ({ tracker, user, ...state }) => {
    window.navigator.geolocation.clearWatch(tracker)
    return {
      ...state,
      tracker: null,
      tracking: null,
      user: {
        ...user,
        trackingAllowed: false
      }
    }
  },
  [setNotificationPermission]: ({ user, ...state }, action) => ({
    ...state,
    user: {
      ...user,
      notificationsAllowed: action.payload
    }
  })
}

const initialState = {
  loggedIn: !!localStorage.token,
  loading: false,
  tracking: null,
  tracker: null,
  user: null
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
