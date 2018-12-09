import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../../breakpoints'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`
const Title = styled.h3`
  flex: 1;
  font-size: 21px;
  font-weight: normal;
  letter-spacing: -0.23;
  @media ${breakpoints.tablet} {
    font-size: 28px;
    letter-spacing: -0.3;
  }
  @media ${breakpoints.laptop} {
    font-size: 38px;
    letter-spacing: -0.3;    
  }    
`
const Price = styled.span`
  font-size: 16px;
  letter-spacing: -0.2;
  @media ${breakpoints.tablet} {
    font-size: 21px;
    letter-spacing: -0.27;
  } 
`
const TitlePrice = ({ title, price }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Price>
      &#36;{price}
    </Price>
  </Container> 
)

TitlePrice.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default TitlePrice