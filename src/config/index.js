import { common, dev, staging, production } from './variables'
import deepKeys from 'deep-keys'
import { isEqual } from 'lodash'

function getEnvConfig() {
  if (!isEqual(deepKeys(production), deepKeys(staging), deepKeys(dev))) {
    console.warning('Prod, staging and dev config structure mismatch')
  }

  if (__DEV__) return dev
  if (!__NETLIFY_CONTEXT__ || __NETLIFY_BRANCH__ === 'dev') return staging
  return production
}

export default { ...common, ...getEnvConfig() }
