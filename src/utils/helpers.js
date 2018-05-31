export function isTouchDevice() {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')

  const mq = function(query) {
    return window.matchMedia(query).matches
  }

  if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
    return true
  }

  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')

  return mq(query)
}
