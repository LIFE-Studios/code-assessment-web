import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  padding: 0.75rem 0;
`
const Title = styled.span`
  color: #9D9D9D;
  flex: 1;
  font-size: 0.875rem;
`
const Price = styled.span`
  font-size: 0.875rem;
`

const LineItem = ({ title, total }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Price>
      &#36;{total}
    </Price>
  </Container>
)

LineItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
}

export default LineItem