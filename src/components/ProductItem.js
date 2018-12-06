import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({
  product,
  onAddToCartClicked,
  onRemoveItemFromCartClicked,
  onRemoveFromCartClicked
}) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />

    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? '+' : 'Sold Out'}
    </button>
    <button
      onClick={onRemoveItemFromCartClicked}
      disabled={product.inventory < product.max ? '' : 'disabled'}>
      -
    </button>
    <button
      onClick={onRemoveFromCartClicked}
      disabled={product.inventory < product.max ? '' : 'disabled'}>
      remove
    </button>
  </div>
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
