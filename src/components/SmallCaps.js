import styled from 'styled-components'
import { media } from 'styles/media'
import { fontBold } from 'styles/typography'

export default styled.span`
  font-weight: ${fontBold};
  font-size: 13px;
  text-transform: uppercase;

  ${media.medium`
    font-size: 14px;
  `};
`
