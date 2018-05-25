import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { red } from 'styles/colors'
import { borderRadius } from 'styles/global'
import * as spacing from 'styles/spacing'
import { rgba, stripUnit } from 'polished'

const Container = styled.div`
  display: inline-block;
  background-color: ${rgba(red, 0.1)};
  color: ${red};
  border-radius: ${borderRadius};
  padding: ${stripUnit(spacing.small) * 1.5 + 'px'} ${spacing.medium};
`

const FormError = ({ text, ...rest }) => (
  <Container>
    <p>{text}</p>
  </Container>
)

FormError.propTypes = {
  text: string.isRequired
}

export default FormError
