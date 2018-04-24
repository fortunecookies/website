import React from 'react'
import styled from 'styled-components'
import { string, object, bool, node } from 'prop-types'

import { white, primaryColor, grey, red, greyLight, offWhite, borderColor } from 'styles/colors'
import { animationTime, animationCurve, borderRadius, inputHeight, inputHeightSmall } from 'styles/global'
import { tinyFontSize, smallFontSize } from 'styles/typography'
import Icon from 'components/Icon'
import Label from 'components/Label'
import * as spacing from 'styles/spacing'
import { rgba, placeholder, stripUnit } from 'polished'

const Container = styled.div`
  display: block;
  width: 100%;
`

const Wrap = styled.div`
  position: relative;

  ${props => props.narrow && `
    max-width: 160px;
  `}
`

const Field = styled.input`
  height: ${props => (props.small ? inputHeightSmall : inputHeight)};
  border-radius: ${borderRadius};
  background-color: ${white};
  width: 100%;
  resize: none;
  color: ${grey};
  vertical-align: top;
  outline: 0;
  padding: 0 ${spacing.medium};
  box-shadow: inset 0 0 0 1px ${borderColor};
  transition: box-shadow ${animationTime} ${animationCurve};

  ${props => props.small && `
    padding: 0 ${stripUnit(spacing.small) * 1.25 + 'px'};
    font-size: ${smallFontSize};
  `}

  ${props => props.icon && `
    padding-left: 46px;
  `}

  ${props => props.addon && `
    padding-right: ${spacing.xxxLarge};
  `}

  ${props => props.error && `
    box-shadow: inset 0 0 0 1px ${red}, 0 0 0 1px ${red};
  `}

  ${placeholder({ color: rgba(grey, 0.3) })};

  &:focus {
    box-shadow: inset 0 0 0 1px ${primaryColor}, 0 0 0 1px ${primaryColor};
  }

  &[disabled] {
    color: ${greyLight};
    pointer-events: none;
    background-color: ${rgba(offWhite, 0.75)};
    user-select: none;
    opacity: 1; /* Overwrite iOS styles */
  }
`

const Textarea = Field.withComponent('textarea').extend`
  padding: ${stripUnit(spacing.medium) - 2 + 'px'} ${spacing.medium};
  min-height: 120px;
  resize: vertical;
`

const FieldIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${stripUnit(spacing.medium) * 0.75 + 'px'};
  pointer-events: none;
  color: ${greyLight};
  transition: color ${animationTime} ${animationCurve};

  ${Field}:focus + & {
    color: ${primaryColor};
  }
`

const Addon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${spacing.medium};
  color: ${primaryColor};
  font-size: ${smallFontSize};
`

const ErrorMessage = styled.small`
  color: ${red};
  display: block;
  margin-top: ${spacing.small};
  font-size: ${tinyFontSize};
`

const Input = ({ label, narrow, input, addon, icon, textarea, meta = {}, ...rest }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <Wrap narrow={narrow}>
      {!textarea &&
        <Field icon={icon} addon={addon} error={meta.error && meta.touched} {...input} {...rest} />
      }
      {textarea &&
        <Textarea error={meta.error && meta.touched} {...input} {...rest} />
      }
      {icon &&
        <FieldIcon icon={icon} />
      }
      {addon &&
        <Addon>{addon}</Addon>
      }
    </Wrap>
    {meta && meta.touched && meta.error &&
      <ErrorMessage>{meta.error}</ErrorMessage>
    }
  </Container>
)

Input.propTypes = {
  label: string,
  icon: string,
  narrow: bool,
  textarea: bool,
  input: object,
  meta: object,
  addon: node
}

export default Input
