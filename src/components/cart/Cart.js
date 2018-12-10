import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { LineBreak } from '../../components/LineBreak'
import Checkout from './Checkout'
import LineItem from './LineItem'
import Empty from './Empty'
import ProductItem from '../../components/Product/ProductItem'

import { 
  addToCart,
  removeItemFromCart,   
  removeFromCart 
} from '../../actions'

const Container = styled.div`
  background: #fff;
  height: 100vh;
  padding: 3rem 1rem;
`

const Cart  = ({ 
  products, 
  total, 
  onCheckoutClicked,
  addToCart,
  removeItemFromCart,
  removeFromCart
}) => {
  const hasProducts = products.length > 0  
  const cartItems = (
    products.map(product =>
      <ProductItem
        cart
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        onRemoveItemFromCartClicked={() => removeItemFromCart(product.id)}
        onRemoveFromCartClicked={() => removeFromCart(product.id)} 
      />
    )
  )
  return (
    <div>
      <Container>
        <h3>Your Cart</h3>    
        <LineBreak />
        {hasProducts ? 
          (<div>
            {cartItems}
            <LineBreak />
            <LineItem title="Subtotal" total={total} />
            <LineItem title="Taxes" total={total} />      
            <LineBreak />        
            <LineItem title="Total" total={total} />
          </div>)
          : (
            <Empty />
          )
        }
      </Container>
      <Checkout 
        disabled={hasProducts} 
        onCheckoutClicked={onCheckoutClicked}
      />
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  quantity: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart, removeFromCart }
)(Cart)