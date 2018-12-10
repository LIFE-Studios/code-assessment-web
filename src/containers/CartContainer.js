import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { 
  getTotal, 
  getCartTotalItems,  
  getCartProducts 
} from '../reducers'
import Cart from '../components/cart/Cart'

const CartContainer = ({ 
  products, 
  total, 
  quantity, 
  checkout 
}) => (
  <Cart
    quantity={quantity}
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} 
  />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  quantity: PropTypes.number,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  quantity: getCartTotalItems(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
