import styled from 'styled-components'

import { greyDark } from 'styles/colors'
import { tinyFontSize, fontMedium } from 'styles/typography'
import * as spacing from 'styles/spacing'

export default styled.label`
  display: block;
  margin-bottom: ${spacing.small};
  font-size: ${tinyFontSize};
  font-weight: ${fontMedium};
  text-align: left;
  color: ${greyDark};
`
