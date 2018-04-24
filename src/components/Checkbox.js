import React from 'react'
import styled from 'styled-components'
import { string, bool } from 'prop-types'

import * as spacing from 'styles/spacing'
import { white, borderColor, primaryColor, greyLight } from 'styles/colors'
import { animationTime, animationCurve, borderRadius, square } from 'styles/global'
import { tinyFontSize } from 'styles/typography'
import Icon from 'components/Icon'
import { stripUnit } from 'polished'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`

const Control = styled.label`
  margin-right: ${spacing.medium};
  flex-shrink: 0;
  cursor: pointer;
`

const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

const Indicator = styled.div`
  ${square`22px`};
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: ${stripUnit(borderRadius) * 0.5 + 'px'};
  border: 1px solid ${borderColor};
  flex-shrink: 0;
  background-color: ${white};
  transition: background-color ${animationTime} ${animationCurve}, border-color ${animationTime} ${animationCurve};

  ${Input}:checked + & {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
  }
`

const Check = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -12px;
  margin-top: -12px;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity ${animationTime} ${animationCurve}, transform ${animationTime} ${animationCurve};

  ${Input}:checked ~ ${Indicator} & {
    opacity: 1; /* Show icon when checkbox is checked */
    transform: none;
  }
`

const Label = styled.div`
  text-align: left;
  margin-top: -2px; /* Align text with checkbox */
`

const Hint = styled.small`
  color: ${greyLight};
  font-size: ${tinyFontSize};
`

const Checkbox = ({ label, hint, checked }) => (
  <Container>
    <Control>
      <Input />
      <Indicator>
        <Check icon='checkmark-small' white />
      </Indicator>
    </Control>
    <Label>
      {label}
    </Label>
    {hint &&
      <Hint>{hint}</Hint>
    }
  </Container>
)

Checkbox.propTypes = {
  label: string.isRequired,
  hint: string,
  checked: bool
}

export default Checkbox
