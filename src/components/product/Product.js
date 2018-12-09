import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../breakpoints'
import ProductImg from './ProductImg'
import ProductRow from './ProductRow'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${breakpoints.tablet} {
    flex-direction: row;
    height: 200px;
  }
  @media ${breakpoints.laptop} {
    flex-direction: row;
    height: 282px;
  }       
`
const Product = (product) => (
  <Container>
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