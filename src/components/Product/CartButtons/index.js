import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quantity from '../Quantity'

const Button = styled.button`  
  background: ${props => props.disabled ? '#F5F5F5' : '#F5F5F5'};
  border: 1px solid #EDEDED;
  border-radius: ${props => props.left ? '20px 0 0 20px' : ' 0 20px 20px 0'};  
  cursor: pointer;
  color: #D8D8D8;
  font-size: 1rem;
  height: 40px;    
  padding: 0 48px;
  :hover {
    background: ${props => props.disabled ? '#5E97D1' : '#407FC0'};
  }
  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row; 
  padding: 10px 0;
  width: 100%;
`
const CartButtons = ({
  inventory,
  max,
  quantity,
  onAddToCartClicked,
  onRemoveItemFromCartClicked
}) => (
  <Container>
    <Button
      left
      onClick={onRemoveItemFromCartClicked}
      disabled={inventory < max ? '' : 'disabled'}>
      -
    </Button>
    <Quantity quantity={quantity} />
    <Button
      right
      onClick={onAddToCartClicked}
      disabled={inventory > 0 ? '' : 'disabled'}>
      +
    </Button>
  </Container>  
)

CartButtons.propTypes = {  
  inventory: PropTypes.number,
  max: PropTypes.number,
  quantity: PropTypes.number,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveItemFromCartClicked: PropTypes.func.isRequired
}

export default CartButtons