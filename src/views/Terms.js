import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Header from 'components/Header'

const Terms = () => (
  <Fragment>
    <Header title="Terms of Use" />
    <Section flushTop>
      <Wrapper narrow>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Curabitur
          blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p>
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit
          libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante
          venenatis dapibus posuere velit aliquet.
        </p>
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Donec sed odio dui.
        </p>
      </Wrapper>
    </Section>
  </Fragment>
)

export default Terms
