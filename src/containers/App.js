import React from 'react'
import Header from '../components/header'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components/macro'
import { breakpoints } from '../breakpoints'
import { LineBreak } from '../components/LineBreak'

const AppContainer = styled.div`
  background: #F2F4F7;
  padding: 1rem;
  @media ${breakpoints.tablet} {
    padding: 3.125rem;
  }
  @media ${breakpoints.tablet} {
    padding: 5rem;
  }  
`
const App = () => (
  <div>
    <CartContainer />
    <AppContainer>    
      <Header txt="Acme Store"/>
      <LineBreak />    
      <ProductsContainer />           
    </AppContainer>
  </div>
)

export default App
