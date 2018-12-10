import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const Container = styled.div`
  align-items: ${props => props.cart ? 'flex-start' : 'center'};
  display: flex;
  flex-direction: ${props => props.cart ? 'column' : 'row'};
`
const Title = styled.h3`
  flex: 1;
  font-size: ${props => props.cart ? '1rem' : '1.375rem'};
  font-weight: normal;
  letter-spacing: -0.23;
  @media ${breakpoints.tablet} {
    font-size: ${props => props.cart ? '1rem' : '1.75rem'};
    letter-spacing: -0.3;
  }
  @media ${breakpoints.laptop} {
    font-size: ${props => props.cart ? '1rem' : '2.375rem'};
    letter-spacing: -0.3;    
  }    
`
const Price = styled.span`
  font-size: ${props => props.cart ? '0.875rem' : '1rem'};
  letter-spacing: -0.2;
  padding: ${props => props.cart ? '0.25rem 0' : ''};
  
  @media ${breakpoints.tablet} {
    font-size: ${props => props.cart ? '0.875rem' : '1.373rem'};
    letter-spacing: -0.27;
  } 
`
const TitlePrice = ({ cart, title, price }) => (
  <Container cart={cart}>
    <Title cart={cart}>
      {title}
    </Title>
    <Price cart={cart}>
      &#36;{price}
    </Price>
  </Container> 
)

TitlePrice.propTypes = {
  cart: PropTypes.bool,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default TitlePrice