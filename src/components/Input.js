import React from 'react'
import styled from 'styled-components'
import { string, object, bool, node } from 'prop-types'

import { white, red, greyLight, greyLightest, offWhite, greyDark } from 'styles/colors'
import { animationTime, animationCurve, borderRadius, inputHeightMobile, inputHeightDesktop } from 'styles/global'
import { tinyFontSize } from 'styles/typography'
import { media } from 'styles/media'
import Label from 'components/Label'
import * as spacing from 'styles/spacing'
import { rgba, placeholder, stripUnit } from 'polished'

const Container = styled.div`
  display: block;
  width: 100%;
`

const Wrapper = styled.div`
  position: relative;
`

const Field = styled.input`
  height: ${inputHeightMobile};
  border-radius: ${borderRadius};
  background-color: ${greyLightest};
  width: 100%;
  resize: none;
  color: ${greyDark};
  vertical-align: top;
  outline: 0;
  padding: 0 ${spacing.medium};
  transition: box-shadow ${animationTime} ${animationCurve}, background-color ${animationTime} ${animationCurve};
  ${placeholder({ color: rgba(greyDark, 0.5) })};

  ${media.medium`
    height: ${inputHeightDesktop};
  `};

  ${props =>
    props.error &&
    `
    box-shadow: inset 0 0 0 1px ${red};
  `} &:focus {
    box-shadow: inset 0 0 0 1px ${greyDark};
    background-color: ${white};
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

const ErrorMessage = styled.small`
  color: ${red};
  display: block;
  margin-top: ${spacing.small};
  font-size: ${tinyFontSize};
`

const Input = ({ label, input, icon, textarea, meta = {}, ...rest }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <Wrapper>
      {!textarea && <Field icon={icon} error={meta.error && meta.touched} {...input} {...rest} />}
      {textarea && <Textarea error={meta.error && meta.touched} {...input} {...rest} />}
    </Wrapper>
    {meta && meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
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
