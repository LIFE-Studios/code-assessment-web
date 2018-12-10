import React from 'react'
import Icon from './icon-basket.png'
import styled from 'styled-components/macro'
import { breakpoints } from '../../breakpoints'

const StyledBasket = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0;
  @media ${breakpoints.tablet} {
    padding: 0 0.5rem;
  }  
`
const Img = styled.img`
  height: ${props => props.cart ? '46px;' : '14px;'};
  @media ${breakpoints.tablet} {
    height: ${props => props.cart ? '56px;' : '16px;'};
  }
`
const Basket = ({ cart }) => (
<StyledBasket>
  <Img
    cart={cart}
    src={Icon} 
    alt="Items in your cart" 
  />
</StyledBasket>
)

export default Basket