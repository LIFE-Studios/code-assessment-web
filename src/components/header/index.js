import React from 'react'
import styled from 'styled-components/macro'
import Basket from '../cart/Basket'
import Counter from '../cart/Counter'

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`
const StyledHeader = styled.h2`
  flex: 1;
  font-size: 3.18rem;  
`
const Cart = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`

const Header = () => (
  <StyledDiv>
    <StyledHeader>Acme Store</StyledHeader>
    <Cart>      
      <Basket height="16px" width="18px" />
      <Counter />
    </Cart>
  </StyledDiv>
)

export default Header