import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const Img = styled.img`
  border-radius: 0 5px 0 0; 
  max-width: 100%;
  height: inherit;
  width: 100%;
  @media ${breakpoints.tablet} {
    border-radius: 0;
    max-width: 272px;
    height: auto;
  }
  @media ${breakpoints.laptop} {
    max-width: 33%;
    height: auto;
  }
`
const ProductImg = ({ title }) => 
  <Img 
    src={`./imgs/${title.toLowerCase()}.jpg`} 
    alt='' 
  />

ProductImg.propTypes = {
  title: PropTypes.string.isRequired
}

export default ProductImg  