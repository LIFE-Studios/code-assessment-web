import React from 'react'
import PropTypes from 'prop-types'

const Quantity = ({ quantity }) => 
  <div>{quantity ? `${quantity} items in cart` : null}</div>

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired
}

export default Quantity  