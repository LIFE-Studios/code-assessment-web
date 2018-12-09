import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const StyledInventory = styled.p`
  color: #939393;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 9px 0;
  @media ${breakpoints.tablet} {
    padding: 12px 0;
  }  
  @media ${breakpoints.laptop} {
    padding: 20px 0;  
  }  
`
const Inventory = ({ inventory }) => (
  <StyledInventory>
    {inventory ? ` ${inventory} remaining` : 'sold out'}
  </StyledInventory>
)

Inventory.propTypes = {
  inventory: PropTypes.number
}

export default Inventory