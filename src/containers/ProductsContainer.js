import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  addToCart, 
  removeItemFromCart, 
  removeFromCart 
} from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/Product/ProductItem'

const ProductsContainer = ({
  products,
  addToCart, 
  removeItemFromCart,
  removeFromCart
}) => (
<div>
  {products.map(product =>
    <ProductItem
      key={product.id}
      product={product}
      onAddToCartClicked={() => addToCart(product.id)}
      onRemoveItemFromCartClicked={() => removeItemFromCart(product.id)}
      onRemoveFromCartClicked={() => removeFromCart(product.id)} />
  )}  
</div>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number,
      currency: PropTypes.string,
    }).isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart, removeFromCart }
)(ProductsContainer)
