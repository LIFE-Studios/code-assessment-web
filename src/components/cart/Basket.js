import React from 'react'
import Icon from './icon-basket.png'

const Basket = ({ 
  height, width 
}) => <img height={height} width={width} src={Icon} alt="Items in your cart" />

export default Basket