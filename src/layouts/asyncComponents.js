import React from 'react'
import { func } from 'prop-types'
import Loadable from 'react-loadable'
import { Route } from 'react-router-dom'
import Loading from 'components/Loading'

export const toAsync = loader =>
  Loadable({
    loader,
    loading: Loading
  })

export const AsyncRoute = ({ loader, ...props }) => {
  return <Route {...props} component={toAsync(loader)} />
}

AsyncRoute.propTypes = {
  loader: func.isRequired
}
