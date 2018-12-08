import React from 'react'
import { connect } from 'react-redux'
import { getCartTotalItems } from '../../reducers'
import styled from 'styled-components/macro'
import { breakpoints } from '../../breakpoints'

const StyledDiv = styled.div`
  flex: 1;
  font-size: 0.75rem;
  @media ${breakpoints.laptop} {
    font-size: 0.875rem;
  }    
`
const Counter = ({
  quantity
}) => <StyledDiv>{ quantity === 0 ? "Your cart is empty" : quantity }</StyledDiv>

const mapStateToProps = (state) => ({
  quantity: getCartTotalItems(state)
})

export default connect(
  mapStateToProps  
)(Counter)