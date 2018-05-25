import React from 'react'
import { func, bool } from 'prop-types'
import styled from 'styled-components'
import { stripUnit, rgba } from 'polished'

import OrnamentBlock from 'components/OrnamentBlock'
import Modal from 'components/Modal'
import { H2 } from 'styles/typography'
import { square } from 'styles/global'
import { greyDark } from 'styles/colors'
import * as spacing from 'styles/spacing'
import Button from 'components/button/Button'
import { media } from 'styles/media'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.xxxLarge} ${spacing.xxLarge};

  ${media.small`
    padding: 72px 48px;
  `};

  ${media.medium`
    min-height: 470px;
    padding: 80px 56px;
  `};

  ${media.large`
    padding: 88px 64px;
  `};
`

const Title = styled(H2)`
  margin-bottom: ${spacing.small};

  ${media.medium`
    margin-bottom: ${stripUnit(spacing.small) * 1.5 + 'px'};
  `};
`

const Subtitle = styled.p`
  margin-bottom: ${spacing.large};

  ${media.medium`
    margin-bottom: ${spacing.xxLarge};
  `};

  ${media.large`
    margin-bottom: ${spacing.xxxLarge};
  `};
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.xLarge};

  ${media.medium`
    margin-top: auto;
  `};
`

const Dot = styled.div`
  border-radius: 50%;
  margin: 0 ${spacing.tiny};
  background-color: ${rgba(greyDark, 0.2)};
  ${square`10px`};
`

const InviteCodeModal = ({ visible, close = () => {} }) => (
  <Modal visible={visible} close={close} noClose>
    <OrnamentBlock>
      <Container>
        <Title>Sign In</Title>
        <Subtitle>Unlock your MetaMask to continue.</Subtitle>
        <Button primary>Unlock MetaMask</Button>
        <Dots>
          <Dot />
          <Dot />
        </Dots>
      </Container>
    </OrnamentBlock>
  </Modal>
)

InviteCodeModal.propTypes = {
  close: func,
  visible: bool
}

export default InviteCodeModal
