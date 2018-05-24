import React from 'react'

import Wrapper from 'components/Wrapper'
import AboutBlock from 'components/AboutBlock'
import PreviousSales from 'components/PreviousSales'
import SingleProduct from 'components/SingleProduct'
import Section from 'components/Section'
import GridRow from 'components/grid/GridRow'
import GridItem from 'components/grid/GridItem'

const BakeSale = () => (
  <>
    <Section>
      <Wrapper>
        <SingleProduct
          lead="Batch ID No. 1"
          title="Genesis"
          price={2.99}
          averagePrice={0.43}
          figure={<img src={require(`static/images/charm.png`)} />}
        />
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
            >
              <span>Quantity: 888 Fortunes</span>
              <span>Release Date: April 20, 2018</span>
            </AboutBlock>
          </GridItem>
          <GridItem xs="1-1" md="1-2">
            <AboutBlock
              lead="About this artist"
              title="John Doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed massa sed est tincidunt aliquam."
            >
              <a href="#">johndoeartist.com</a>
              <a href="#">dribbble.com/johndoe</a>
            </AboutBlock>
          </GridItem>
        </GridRow>
      </Wrapper>
    </Section>
    <PreviousSales />
  </>
)

export default BakeSale
