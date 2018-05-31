import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Header from 'components/Header'

const Privacy = () => (
  <Fragment>
    <Header title="Privacy Policy" />
    <Section flushTop>
      <Wrapper narrow>
        <p>
          Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Donec sed odio dui.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Donec
          sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis
          euismod semper.
        </p>
        <p>
          Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Integer posuere erat a ante
          venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
          ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
      </Wrapper>
    </Section>
  </Fragment>
)

export default Privacy
