import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { LineBreak } from '../../components/LineBreak'
import Checkout from './Checkout'
import LineItem from './LineItem'
import Empty from './Empty'
import Header from './Header'
import ProductItem from '../../components/Product/ProductItem'
import { 
  addToCart,
  removeItemFromCart,   
  removeFromCart 
} from '../../actions'

const Wrapper = styled.div`
  top: ${props => props.toggle ? '0' : '-110%'};
  position: absolute;
  transition: top 300ms ease-in-out;
  left: 0;
  width: 100%;  
`
const Container = styled.div`
  background: #fff;
  height: 100vh;  
`
const Inner = styled.div`
  height: calc(100% - 12rem);  
  overflow-y: scroll;
  padding: 0 1rem;
`
const Cart  = ({ 
  products, 
  total,
  toggle, 
  onCheckoutClicked,
  addToCart,
  removeItemFromCart,
  removeFromCart
}) => {
  const hasProducts = products.length > 0    
  const CartItems = (
    products.map(product =>
      <ProductItem
        cart        
        quantity={product.quantity}
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        onRemoveItemFromCartClicked={() => removeItemFromCart(product.id)}
        onRemoveFromCartClicked={() => removeFromCart(product.id)} 
      />
    )
  )
  return (
    <Wrapper toggle={toggle}>
      <Container>
        <Header /> 
        <Inner>           
          <LineBreak />
          {hasProducts ? 
            (<div>
              {CartItems}
              <LineBreak />
              <LineItem title="Subtotal" total={total} />
              <LineItem title="Taxes" total={(total * 0.0875).toFixed(2)} />      
              <LineBreak />        
              <LineItem title="Total" total={(Number(total) + Number(total * 0.0875)).toFixed(2)} />
            </div>)
            : (
              <Empty />
            )
          }
        </Inner>
      </Container>
      <Checkout 
        disabled={hasProducts} 
        onCheckoutClicked={onCheckoutClicked}
      />
    </Wrapper>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  quantity: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

const mapStateToProps = state => ({
  toggle: state.cart.toggle
})

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart, removeFromCart }
)(Cart)