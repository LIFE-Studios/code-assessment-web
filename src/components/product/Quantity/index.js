import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid #EDEDED;
  border-top: 1px solid #EDEDED;  
  display: flex;
  flex: 1;
  height: 38px;  
  justify-content: center;
  text-align: center;
`
const Quantity = ({ quantity }) => (
  <Container>
    {quantity ? `${quantity}` : 0}
  </Container>
)

Quantity.propTypes = {
  quantity: PropTypes.number
}

export default Quantity 