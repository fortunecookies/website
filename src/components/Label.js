import styled from 'styled-components'

import { greyDark } from 'styles/colors'
import { tinyFontSize, fontSemibold } from 'styles/typography'
import * as spacing from 'styles/spacing'

export default styled.label`
  display: block;
  margin-bottom: ${spacing.small};
  font-size: ${tinyFontSize};
  font-weight: ${fontSemibold};
  text-align: left;
  color: ${greyDark};
`
