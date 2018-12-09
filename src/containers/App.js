import React from 'react'
import Header from '../components/header'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components/macro'
import { breakpoints } from '../breakpoints'
import { LineBreak } from '../components/LineBreak'

const AppContainer = styled.div`
  padding: 1rem;
  @media ${breakpoints.tablet} {
    padding: 3.125rem;
  }
  @media ${breakpoints.tablet} {
    padding: 5rem;
  }  
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
