export const formatPhone = phone => {
  const onlyNumbers = phone.replace(/\D/, '')
  const last4 = onlyNumbers.slice(-4)
  const first3 = onlyNumbers.slice(-7, -4)
  const areaCode = onlyNumbers.slice(-10, -7)
  const countryCode = onlyNumbers.slice(-11, -10) || '1'
  return `+${countryCode}-${areaCode}-${first3}-${last4}`
}
