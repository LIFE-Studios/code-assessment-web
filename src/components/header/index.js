import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
import Basket from '../Cart/Basket'
import Counter from '../Cart/Counter'
import { breakpoints } from '../../breakpoints'
import { toggleCart } from '../../actions'

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
  cursor: pointer;
  display: flex;
  height: 100%;
`

const Header = ({ 
  txt,
  toggleCart
}) => (
  <StyledDiv>
    <StyledHeader>{txt}</StyledHeader>
      <MiniCart onClick={() => toggleCart()}>      
      <Basket />
      <Counter />
    </MiniCart>
  </StyledDiv>
)

Header.propTypes = {
  txt: PropTypes.string,
  toggleCart: PropTypes.func.isRequired
}

export default connect(
  null,
  { toggleCart }
)(Header)