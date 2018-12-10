import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const Img = styled.img`
  border-radius: 0 5px 0 0; 
  max-width: ${props => props.cart ? '156px;' : '100%'};
  height: inherit;
  width: ${props => props.cart ? '33%' : '100%'};
  
  @media ${breakpoints.tablet} {
    border-radius: 0;
    max-width: ${props => props.cart ? '156px' : '282px;'};
    height: auto;
  }
  @media ${breakpoints.laptop} {
    max-width: ${props => props.cart ? '156px' : '455px;'};
    height: auto;
  }
`
const ProductImg = ({ title, cart }) => 
  <Img
    cart={cart}
    src={`./imgs/${title.toLowerCase()}.jpg`} 
    alt='' 
  />

ProductImg.propTypes = {
  cart: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default ProductImg  