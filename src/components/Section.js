import React from 'react'
import styled, { css } from 'styled-components'
import { string, node, bool } from 'prop-types'

import { verticalPadding } from 'styles/global'
import { media } from 'styles/media'
import { offWhite, borderColor } from 'styles/colors'

const Container = styled.section`
  ${verticalPadding`3rem`};

  ${props =>
    props.alt &&
    css`
      background-color: ${offWhite};
    `} ${props =>
  props.center &&
  css`
    text-align: center;
  `} ${props =>
  props.flush &&
  css`
    padding: 0 !important;
  `} ${props =>
  props.borderBottom &&
  css`
    border-bottom: 1px solid ${borderColor};
  `} ${props =>
  props.flushTop &&
  css`
    padding-top: 0 !important;
  `} ${props =>
  props.flushBottom &&
  css`
    padding-bottom: 0 !important;
  `} ${media.small`
    ${verticalPadding`4rem`};
  `};

  ${media.medium`
    ${verticalPadding`5rem`};
  `};

  ${media.large`
    ${verticalPadding`6rem`};
  `};

  ${media.xLarge`
    ${verticalPadding`7rem`};
  `};
`

const Block = styled.div`
  position: relative;
  padding-bottom: 1.75rem;

  &:last-child {
    padding-bottom: 0;
  }

  ${media.small`
    padding-bottom: 2rem;
  `};

  ${media.medium`
    padding-bottom: 2.5rem;
  `};

  ${media.large`
    padding-bottom: 3rem;
  `};

  ${media.xLarge`
    padding-bottom: 3.5rem;
  `};
`

const Section = ({ className, flush, flushTop, flushBottom, borderBottom, alt, center, children }) => (
  <Container
    flush={flush}
    flushTop={flushTop}
    borderBottom={borderBottom}
    flushBottom={flushBottom}
    className={className}
    alt={alt}
    center={center}
  >
    {children}
  </Container>
)

Section.propTypes = {
  children: node.isRequired,
  className: string,
  flush: bool,
  flushTop: bool,
  center: bool,
  flushBottom: bool,
  borderBottom: bool,
  alt: bool
}

export const SectionBlock = ({ children, className }) => <Block className={className}>{children}</Block>

SectionBlock.propTypes = {
  children: node.isRequired,
  className: string
}

export default Section
