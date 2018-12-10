import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const Button = styled.button`
  background: ${props => props.disabled ? '#5E97D1' : '#5E97D1'};
  border-radius: 20px;
  color: #fff;  
  cursor: pointer;
  padding: 10px 15px;  
  text-transform: uppercase;
  :hover {
    background: ${props => props.disabled ? '#5E97D1' : '#407FC0'};
  }
  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`
const Container = styled.div`
  align-items: flex-end;
  display: flex;
  margin-top: 20px;
  @media ${breakpoints.tablet} {
    margin-top:auto;
  }
`;

const AddToCartButton = ({ 
  inventory,
  onAddToCartClicked 
}) => (
  <Container>
    <Button
      disabled={inventory > 0 ? '' : 'disabled'}
      onClick={onAddToCartClicked}
    >Add to Cart</Button>
  </Container>
)

AddToCartButton.propTypes = {
  inventory: PropTypes.number,
  onAddToCartClicked: PropTypes.func
}

export default AddToCartButton