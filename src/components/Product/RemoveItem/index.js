import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Container = styled.div`
  align-items: flex-end;  
  display: flex;
  margin-top: auto;  
`
const RemoveLink = styled.button`
  border: none;
  color: #CC1D39; 
  cursor: pointer;
  font-size: 0.875rem;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
const RemoveItem = ({ 
  onRemoveFromCartClicked 
}) =>  (
  <Container>
    <RemoveLink
      onClick={onRemoveFromCartClicked}
      href="#"
      alt="remove item from cart"
    >Remove</RemoveLink>
  </Container>  
)

RemoveItem.propTypes = {
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default RemoveItem