import React from 'react'
import styled, { css } from 'styled-components'
import { object, func, bool, string, number, oneOfType } from 'prop-types'
import { offWhite, white, greyDark, borderColor } from 'styles/colors'
import { borderRadius, inputHeight, animationTime, animationCurve, boxShadowLight } from 'styles/global'
import * as spacing from 'styles/spacing'
import { rgba } from 'polished'

import Icon from 'components/Icon'
import Label from 'components/Label'

const Container = styled.div`
  display: inline-block;

  ${props => props.full && css`
    display: block;
    width: 100%;
  `}
`

const Wrap = styled.div`
  position: relative;
`

const Select = styled.select`
  display: block;
  height: ${inputHeight};
  border-radius: ${borderRadius};
  background-color: ${white};
  background-image: linear-gradient(180deg, ${rgba(white, 0.5)} 0%, ${rgba(offWhite, 0.50)} 100%);
  border: 1px solid ${borderColor};
  width: 100%;
  resize: none;
  color: ${greyDark};
  vertical-align: top;
  outline: 0;
  padding: 0 ${spacing.medium};
  padding-right: 48px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px ${borderColor};
  transition: box-shadow ${animationTime} ${animationCurve};
  ${boxShadowLight};
`

const DropdownIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: ${spacing.medium};
  transform: translateY(-50%);
  pointer-events: none;
`

const Dropdown = ({ options, onChange, value, label, full, ...rest }) => (
  <Container full={full} {...rest}>
    {label && <Label>{label}</Label>}
    <Wrap>
      <Select onChange={onChange} value={value}>
        {Object.entries(options).map(([name, val], i) => (
          <option key={i} value={val}>
            {name}
          </option>
        ))}
      </Select>
      <DropdownIcon icon="dropdown" />
    </Wrap>
  </Container>
)

Dropdown.propTypes = {
  label: string,
  options: object.isRequired,
  onChange: func.isRequired,
  full: bool,
  value: oneOfType([string, number]).isRequired
}

export default Dropdown
