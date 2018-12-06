import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
const Cart  = ({ 
  products, 
  total, 
  onCheckoutClicked,
  quantity 
}) => {
  const hasProducts = products.length > 0
  const cartItems = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{cartItems}</div>
      <p>Total items: {quantity}</p>
      <p>Total cost: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  quantity: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default Cart
