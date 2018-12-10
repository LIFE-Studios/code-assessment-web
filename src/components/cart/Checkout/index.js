import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 44px;
  width: 100%;
`;

const Button = styled.button`
  background: ${props => props.disabled ? '#5E97D1' : '#5E97D1'};
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 14px;  
  text-transform: uppercase;
  width: 100%;
  :hover {
    background: ${props => props.disabled ? '#5E97D1' : '#407FC0'};
  }
  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }  
`;

const Checkout = ({
  disabled,
  onCheckoutClicked
}) => (
<Container>
  <Button 
    onClick={onCheckoutClicked}
    disabled={disabled ? '' : 'disabled'}>
    Checkout
  </Button>
</Container>
)

Checkout.propTypes = {
  inventory: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default Checkout