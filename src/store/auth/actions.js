import { createAction } from 'redux-actions'
import { setToken, clearToken } from 'store/api'

export const login = createAction('Login')

export const logout = createAction('Logout')

const dummyUser = {
  name: 'Robynn',
  trackingAllowed: true,
  notificationsAllowed: false
}

export const requestLogin = createAction('Request login', () => dispatch => {
  setToken('I am a token')
  dispatch(login(dummyUser))
  if (dummyUser.trackingAllowed) dispatch(enableTracking())
})

export const requestLogout = createAction('Request logout', () => dispatch => {
  clearToken()
  dispatch(logout())
})

export const setTracker = createAction('Store tracker')
export const setCoords = createAction('Store coordinates')

export const enableTracking = createAction('Enable tracking permissions', () => dispatch => {
  const tracker = window.navigator.geolocation.watchPosition(
    ({ coords: { latitude, longitude }, timestamp }) => {
      dispatch(
        setCoords({
          coords: {
            latitude,
            longitude
          },
          timestamp
        })
      )
    },
    err => console.log(err)
  )
  dispatch(setTracker(tracker))
})

export const disableTracking = createAction('Disable tracking permissions')

export const setTrackingPermission = createAction('Set tracking permission', isPermitted => dispatch => {
  if (isPermitted) return dispatch(enableTracking())
  return dispatch(disableTracking())
})
export const setNotificationPermission = createAction('Set notification permission')

export const submitNewPassword = createAction('Submit new password', (password, push) => dispatch => {
  dispatch(login(dummyUser))
  if (dummyUser.trackingAllowed) dispatch(enableTracking())
  return dispatch(push('/'))
})

const passwordResetReqested = createAction('Password reset requested')

export const submitPasswordResetRequest = createAction('Request password reset', ({ email }, push) => dispatch => {
  dispatch(passwordResetReqested)
  push(`/auth/password-reset-requested`, email)
})
