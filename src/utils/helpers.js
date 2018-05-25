export const arrayinator = (obj, length = 6, array = []) => {
  return length > 0 ? arrayinator(obj, length - 1, [...array, obj]) : array
}
