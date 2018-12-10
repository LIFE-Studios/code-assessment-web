import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../breakpoints'
import ProductImg from './ProductImg'
import ProductRow from './ProductRow'

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.cart ? 'row' : 'column'};
  height: ${props => props.cart ? '100px;' : '100%'};
  padding: ${props => props.cart ? '10px 0;' : ''};

  @media ${breakpoints.tablet} {
    flex-direction: row;
    height: ${props => props.cart ? '100px;' : '200px'};
  }
  @media ${breakpoints.laptop} {
    flex-direction: row;
    height: ${props => props.cart ? '100px;' : '282px'};
  }       
`
const Product = (product) => (
  <Container cart={product.cart}>
    {ProductImg(product)}
    {ProductRow(product)}
  </Container>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onAddToCartClicked: PropTypes.func
}

export default Product