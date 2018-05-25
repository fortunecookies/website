import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'

import { white } from 'styles/colors'
import Spinner from 'components/Spinner'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  z-index: 450;
`

const Loading = ({ pastDelay }) => {
  if (!pastDelay) return null
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

Loading.propTypes = {
  pastDelay: bool
}

export default Loading
