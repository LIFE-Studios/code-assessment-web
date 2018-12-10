import React from 'react'
import styled from 'styled-components/macro'
import Basket from '../Basket'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 182px);
  justify-content: center;
  flex-direction: column;
`
const P = styled.p`
  color: #919191;
  font-size: 1rem;
  padding: 1rem;
`

const Empty = () => (
  <Container>
    <Basket cart />    
    <P>Please add some products to your cart.</P>    
  </Container>
)

export default Empty