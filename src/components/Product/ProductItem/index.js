import React from 'react'
import PropTypes from 'prop-types'
import Product from '..'
import styled from 'styled-components/macro'
import CartButtons from '../CartButtons'

const Container = styled.div`   
  padding: 10px 0;
`
const ProductItem = ({
  cart,
  product,
  quantity,
  onAddToCartClicked,
  onRemoveItemFromCartClicked,
  onRemoveFromCartClicked
}) => (
  <Container>        
    <Product
      onAddToCartClicked={onAddToCartClicked}
      onRemoveFromCartClicked={onRemoveFromCartClicked}
      cart={cart}
      id={product.id}
      title={product.title}
      price={product.price}
      inventory={product.inventory} />    
    {cart && 
      <CartButtons
        inventory={product.inventory}
        max={product.max}
        quantity={quantity}  
        onAddToCartClicked={onAddToCartClicked}
        onRemoveItemFromCartClicked={onRemoveItemFromCartClicked}
      />
    }    
  </Container>
)

ProductItem.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.shape({
    inventory: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveItemFromCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default ProductItem
