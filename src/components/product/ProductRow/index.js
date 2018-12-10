import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'
import Inventory from '../Inventory'
import TitlePrice from '../TitlePrice'
import AddToCart from '../AddToCart'
import RemoveItem from '../RemoveItem'

const Row = styled.div`
  background: #fff;
  border-radius: 5px; 
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${props => props.cart ? '0.125rem 0.875rem' : ' 2rem 1.25rem'};
  @media ${breakpoints.tablet} {
    padding: ${props => props.cart ? '0 0.875rem' : '2rem 2.4rem'};
  }
  @media ${breakpoints.laptop} {
    padding: ${props => props.cart ? '0 0.875rem' : '2rem 4.7rem 2rem 3rem'};
  }
`
const ProductRow = ({
  cart,  
  inventory,
  price,
  title,
  onAddToCartClicked,
  onRemoveFromCartClicked
}) => (
  <Row cart={cart}>    
    <TitlePrice cart={cart} title={title} price={price} />    
    
    {!cart && 
      <Inventory inventory={inventory} />}        

    {!cart && 
      <AddToCart inventory={inventory}
        onAddToCartClicked={onAddToCartClicked} />}

    {cart && 
      <RemoveItem onRemoveFromCartClicked={onRemoveFromCartClicked} />}
  </Row>
)

ProductRow.propTypes = {
  cart: PropTypes.bool,
  inventory: PropTypes.number,
  price: PropTypes.number,  
  title: PropTypes.string,
  quantity: PropTypes.number,  
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func
}

export default ProductRow 