import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'
import Inventory from '../Inventory'
import TitlePrice from '../TitlePrice'
import AddToCart from '../AddToCart'
import Quantity from '../Quantity'

const Row = styled.div`
  background: #fff;
  border-radius: 5px; 
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem 1.25rem;
  @media ${breakpoints.tablet} {
    padding: 2.4rem 2.4rem;
  }
  @media ${breakpoints.laptop} {
    padding: 2rem 4.7rem 2rem 3rem;
  }
`
const ProductRow = ({  
  inventory,
  price,
  title,
  quantity,
  onAddToCartClicked
}) => (
  <Row>
    <TitlePrice title={title} price={price} />
    <Inventory inventory={inventory} />
    <Quantity quantity={quantity} />
    <AddToCart inventory={inventory}
      onAddToCartClicked={onAddToCartClicked} />
  </Row>
)

ProductRow.propTypes = {
  inventory: PropTypes.number,
  price: PropTypes.number,  
  title: PropTypes.string,
  quantity: PropTypes.number,  
  onAddToCartClicked: PropTypes.func
}

export default ProductRow  