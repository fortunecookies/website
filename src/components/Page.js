import styled from 'styled-components'
import { black, white } from 'styles/colors'

export default styled.div`
  min-height: 100vh;
  background-color: ${props => (props.theme.isStoreClosed ? black : white)};
  color: ${props => (props.theme.isStoreClosed ? white : black)};
`
