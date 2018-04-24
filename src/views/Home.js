import React, { Fragment } from 'react'

import { H1, H2, H3, H4 } from 'styles/typography'
import Button from 'components/button/Button'
import ButtonGroup from 'components/button/ButtonGroup'

const Home = () => (
  <Fragment>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <ButtonGroup>
      <Button primary>Buy Now</Button>
      <Button secondary>How to play</Button>
    </ButtonGroup>
  </Fragment>
)

export default Home
