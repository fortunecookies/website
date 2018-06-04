import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { connect } from 'react-redux'

import Wrapper from 'components/Wrapper'
import AboutBlock from 'components/AboutBlock'
import PreviousSales from 'components/PreviousSales'
import ClosedBakeSale from 'components/ClosedBakeSale'
import SingleProduct from 'components/SingleProduct'
import Section from 'components/Section'
import SignInModal from 'components/Modal/SignInModal'
import GridRow from 'components/grid/GridRow'
import GridItem from 'components/grid/GridItem'

const mapStateToProps = ({ store }, { location }) => ({
  storeStatus: store.status,
  location
})

@connect(mapStateToProps)
class BakeSale extends Component {
  static propTypes = {
    location: object.isRequired,
    storeStatus: string.isRequired
  };

  render() {
    const { location, storeStatus } = this.props
    const isStoreClosed = location.pathname.includes('bake-sale') && storeStatus === 'closed'

    return (
      <>
        {isStoreClosed ? (
          <ClosedBakeSale />
        ) : (
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
            <PreviousSales
              sales={[
                {
                  figure: 'gem',
                  name: 'Dimension',
                  price: 2.97
                },
                {
                  figure: 'egg',
                  name: 'Fortuna',
                  price: 2.97
                },
                {
                  figure: 'cookie',
                  name: 'Genesis',
                  price: 2.97
                }
              ]}
            />
          </>
        )}

        <SignInModal />
      </>
    )
  }
}

export default BakeSale
