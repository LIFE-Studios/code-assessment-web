import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { toggleCart } from '../../../actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.h3`
  font-size: 1.75rem;
  padding: 0 1rem;
`

const Close = styled.button`  
  border: 0;
  color: #D8D8D8;
  cursor: pointer;
  flex: 1;
  font-size: 1.5rem;
  margin-left: auto;
  padding: 20px;
`

const Header = ({ toggleCart }) => (
  <Container>
    <Close onClick={toggleCart}>X</Close>
    <StyledHeader>Your Cart</StyledHeader>    
  </Container>
)

Header.propTypes = {
  toggleCart: PropTypes.func.isRequired
}

export default connect(
  null,
  { toggleCart }
)(Header)