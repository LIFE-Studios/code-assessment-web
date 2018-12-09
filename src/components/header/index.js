import React from 'react'
import styled from 'styled-components/macro'
import Basket from '../cart/Basket'
import Counter from '../cart/Counter'
import { breakpoints } from '../../breakpoints'

const StyledDiv = styled.div`  
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${breakpoints.tablet} {
    align-items: center;
    flex-direction: row;
  }
`
const StyledHeader = styled.h2`
  flex: 1;
  font-size: 1.75rem;
  font-weight: normal;
  letter-spacing: -0.59px;
  padding: 20px 0 0;
  @media ${breakpoints.tablet} {
    font-size: 2.375rem;
    letter-spacing: -0.8px;    
  }
  @media ${breakpoints.laptop} {
    font-size: 3.18rem;
    letter-spacing: -1.07px;
  }  
`
const MiniCart = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`
const Header = ({ txt }) => (
  <StyledDiv>
    <StyledHeader>{txt}</StyledHeader>
    <MiniCart>      
      <Basket />
      <Counter />
    </MiniCart>
  </StyledDiv>
)

export default Header