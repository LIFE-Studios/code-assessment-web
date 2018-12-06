import React from 'react'
import Header from '../components/header'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components/macro'
const AppContainer = styled.div`
  width: 100%;
`
const App = () => (
  <AppContainer>
    <Header />
    <hr />
    <ProductsContainer />    
    <hr/>
    <CartContainer />
  </AppContainer>
)

export default App
