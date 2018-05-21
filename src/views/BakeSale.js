import React, { Fragment } from 'react'

import Wrapper from 'components/Wrapper'
import AboutBlock from 'components/AboutBlock'
import Section from 'components/Section'
import GridRow from 'components/grid/GridRow'
import GridItem from 'components/grid/GridItem'

const BakeSale = () => (
  <Fragment>
    <Section>
      <Wrapper>
        <p>Bake sale</p>
      </Wrapper>
    </Section>
    <Section flushTop>
      <Wrapper>
        <GridRow>
          <GridItem xs="1-1" md="1-2">
            <AboutBlock
              lead="About this batch"
              title="Genesis"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed massa sed est tincidunt aliquam."
              meta={[
                {
                  text: 'Quantity: 888 Fortunes'
                },
                {
                  text: 'Release Date: April 20, 2018'
                }
              ]}
            />
          </GridItem>
          <GridItem xs="1-1" md="1-2">
            <AboutBlock
              lead="About this artist"
              title="John Doe"
              description="Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo."
              meta={[
                {
                  text: <a href="#">johndoeartist.com</a>
                },
                {
                  text: <a href="#">dribbble.com/johndoe</a>
                }
              ]}
            />
          </GridItem>
        </GridRow>
      </Wrapper>
    </Section>
  </Fragment>
)

export default BakeSale
