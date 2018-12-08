import React from 'react'
import Header from '../components/header'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components/macro'
import { breakpoints } from '../breakpoints'

const AppContainer = styled.div`
  padding: 1rem;
  @media ${breakpoints.tablet} {
    padding: 3.125rem;
  }
  @media ${breakpoints.tablet} {
    padding: 5rem;
  }  
`
const LineBreak = styled.hr`
  border: 1px solid;
  color: #D8D8D8;
  margin: 20px 0;
`
const App = () => (
  <AppContainer>    
    <Header txt="Acme Store"/>
    <LineBreak />    
    <ProductsContainer />    
    <LineBreak />    
    <CartContainer />
  </AppContainer>
)

export default App
