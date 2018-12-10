import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Container = styled.div`
  align-items: flex-end;  
  display: flex;
  font-size: 0.875rem;
  margin-top: auto;  
`
const RemoveLink = styled.a`
  color: #CC1D39; 
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