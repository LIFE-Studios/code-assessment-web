import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components/macro'
import { breakpoints } from '../breakpoints'
import { LineBreak } from '../components/LineBreak'
import { toggleCart } from '../actions'

const Wrapper = styled.div`
  overflow: ${props => props.toggle ? 'hidden' : 'inherit'};
  height: 100vh;
`
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

const App = ({
  toggle
}) => (
  <Wrapper toggle={toggle}>
    <AppContainer>    
      <Header toggleCart={toggleCart} txt="Acme Store"/>
      <LineBreak />    
      <ProductsContainer />           
    </AppContainer>
    <CartContainer />
  </Wrapper>
)

App.propTypes = {
  toggle: PropTypes.bool,
}

const mapStateToProps = state => ({
  toggle: state.cart.toggle
})

export default connect(
  mapStateToProps,
  null
)(App)