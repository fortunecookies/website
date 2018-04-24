// redux-form 7.2.0 field validations CANNOT handle thunks.

export const required = value => {
  if (!value) return `Required`
}

export const minLength = min => value => {
  console.log(value)
  if (!value || value.length >= min) return
  return `Must be at least ${min} characters`
}

export const minPasswordLength = minLength(8)

export const match = (value, { password }) => {
  if (!value || password === value) return
  return 'Passwords must match'
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isEmail = value => {
  if (!value || emailRegex.test(value)) return
  return 'Invalid email'
}

export const onlyNumber = (value = '') => {
  return value.replace(/\D/g, '')
}

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

export const isPhoneNumber = value => {
  if (!value || phoneRegex.test(value)) return
  return 'Invalid phone number'
}
