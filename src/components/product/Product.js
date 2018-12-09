import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { breakpoints } from '../../breakpoints'
const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${breakpoints.tablet} {
    flex-direction: row;
    height: 200px;
  }
  @media ${breakpoints.laptop} {
    flex-direction: row;
    height: 282px;
  }       
`
const Img = styled.img`
  border-radius: 0 5px 0 0; 
  max-width: 100%;
  height: inherit;
  width: 100%;
  @media ${breakpoints.tablet} {
    border-radius: 0;
    max-width: 272px;
    height: auto;
  }
  @media ${breakpoints.laptop} {
    max-width: 33%;
    height: auto;
  }
`
const Row = styled.div`
  background: #fff;
  border-radius: 5px; 
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem 1.25rem;
  @media ${breakpoints.tablet} {
    padding: 2.4rem 2.4rem;
  }
  @media ${breakpoints.laptop} {
    padding: 2rem 4.7rem 2rem 3rem;
  }
`
const StyledDiv = styled.div`
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
const Inventory = styled.p`
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
const Button = styled.button`
  background: ${props => props.disabled ? '#5E97D1' : '#5E97D1'};
  border-radius: 20px;
  color: #fff;  
  cursor: pointer;
  padding: 10px 15px;  
  text-transform: uppercase;
  :hover {
    background: ${props => props.disabled ? '#5E97D1' : '#407FC0'};
  }
  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`
const ButtonRow = styled.div`
  align-items: flex-end;
  display: flex;
  margin-top: 20px;
  @media ${breakpoints.tablet} {
    margin-top:auto;
  }
`;

const ProductImg = ({title}) => <Img src={`./imgs/${title.toLowerCase()}.jpg`} alt='' />

const ProductRow = ({
  price,
  inventory,
  title,
  quantity,
  onAddToCartClicked
}) => 
<Row>  
  <StyledDiv>
    <Title>
      {title}
    </Title>
    <Price>
      &#36;{price} 
    </Price>
  </StyledDiv>    
  <Inventory>
    {inventory ? ` ${inventory} remaining` : 'sold out'}
  </Inventory>
  <div>
    {quantity ? ` x ${quantity} items in cart` : null}
  </div>  
  <ButtonRow>
    <Button 
      disabled={inventory > 0 ? '' : 'disabled'}
      onClick={onAddToCartClicked}
    >Add to Cart</Button>
  </ButtonRow>
</Row>

const Product = (product) => (
  <StyledProduct>
    {ProductImg(product)}
    {ProductRow(product)}
  </StyledProduct>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onAddToCartClicked: PropTypes.func
}

export default Product