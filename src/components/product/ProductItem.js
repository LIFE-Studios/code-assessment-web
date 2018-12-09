import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styled from 'styled-components/macro'

const StyledProductItem = styled.div`
  padding: 10px 0;
`
const StyledButton = styled.button`
  padding: 5px;
  margin: 5px;
`
const StyledButons = styled.div`
  padding: 10px 0;
  width: 100%;
`
const ProductItem = ({
  product,
  onAddToCartClicked,
  onRemoveItemFromCartClicked,
  onRemoveFromCartClicked
}) => (
  <StyledProductItem>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <StyledButons>
      <StyledButton
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? '+' : 'Sold Out'}
      </StyledButton>

      <StyledButton
        onClick={onRemoveItemFromCartClicked}
        disabled={product.inventory < product.max ? '' : 'disabled'}>
        -
      </StyledButton>
      
      <StyledButton
        onClick={onRemoveFromCartClicked}
        disabled={product.inventory < product.max ? '' : 'disabled'}>
        remove
      </StyledButton>
    </StyledButons>

  </StyledProductItem>
  )

ProductItem.propTypes = {
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
