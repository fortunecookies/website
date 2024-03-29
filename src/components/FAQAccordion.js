import React, { Component } from 'react'
import { node, string } from 'prop-types'
import styled, { css } from 'styled-components'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import Icon from 'components/Icon'
import { greyDark, borderColor, primaryColor } from 'styles/colors'
import { media } from 'styles/media'
import { H4, headingLineHeight } from 'styles/typography'

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid ${borderColor};
  margin-bottom: ${spacing.small};

  ${media.medium`
    margin-bottom: ${stripUnit(spacing.small) * 1.5 + 'px'};
  `};

  &:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.expanded &&
    css`
      border-color: ${primaryColor};
    `};
`

const Question = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${spacing.medium};

  ${media.small`
    padding: ${spacing.large};
  `};

  ${media.large`
    padding: ${spacing.xLarge} ${spacing.large};
  `};
`

const QuestionTitle = styled(H4)`
  margin-bottom: 0;
  color: ${greyDark};
  flex-grow: 1;
  line-height: ${stripUnit(headingLineHeight) * 1.25};
  padding-right: ${spacing.medium};

  ${media.medium`
    padding-right: ${spacing.large};
  `};
`

const Content = styled.main`
  display: ${props => (props.expanded ? 'block' : 'none')};
  padding: ${spacing.medium};
  padding-top: 0;

  ${media.small`
    padding: ${spacing.large};
    padding-top: 0;
    margin-top: -${spacing.small};
  `};

  ${media.medium`
    padding-right: 56px;
  `};

  ${media.large`
    padding-right: 72px;
  `};

  ${media.xLarge`
    padding-right: 96px;
  `};
`

class FAQAccordion extends Component {
  static propTypes = {
    children: node.isRequired,
    question: string.isRequired
  };

  state = {
    expanded: false
  };

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded })
  };

  render() {
    const { expanded } = this.state
    return (
      <Container expanded={expanded}>
        <Question onClick={this.toggleExpanded}>
          <QuestionTitle>{this.props.question}</QuestionTitle>
          <Icon icon={expanded ? 'minus' : 'plus'} brand />
        </Question>
        <Content expanded={expanded}>{this.props.children}</Content>
      </Container>
    )
  }
}

export default FAQAccordion
