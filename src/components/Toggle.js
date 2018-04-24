import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import { stripUnit } from 'polished'

import { animationTime, animationCurve, boxShadow } from 'styles/global'
import { white, primaryColor, borderColor } from 'styles/colors'

export const toggleDimensions = {
  width: '50px',
  height: '30px'
}

const Container = styled.label`
  display: inline-block;
`

const Input = styled.input`
  display: none;
`

const Indicator = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: ${toggleDimensions.width};
  height: ${toggleDimensions.height};
  background-color: ${borderColor};
  border-radius: ${stripUnit(toggleDimensions.height) / 2 + 'px'};
  cursor: pointer;
  transition: background-color ${animationTime} ${animationCurve};

  ${Input}:checked + & {
    background-color: ${primaryColor};
  }

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${white};
    transition: transform ${animationTime} ${animationCurve};
    ${boxShadow};

    ${Input}:checked + & {
      transform: translateX(20px);
    }
  }
`

const Toggle = ({ checked, onClick }) => (
  <Container checked={checked}>
    <Input onChange={onClick} type="checkbox" id="toggle" checked={checked} />
    <Indicator />
  </Container>
)

Toggle.propTypes = {
  checked: bool,
  onClick: func.isRequired
}

export default Toggle
