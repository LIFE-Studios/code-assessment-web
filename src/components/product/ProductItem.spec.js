import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn(),
    onRemoveItemFromCartClicked: jest.fn(),
    onRemoveFromCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6,
      max: 99
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99, inventory: 6 })
  })

  it('should render button labels', () => {
    const { button } = setup(productProps)
    expect(button.at(0).text()).toMatch('+')
    expect(button.at(1).text()).toMatch('-')
    expect(button.at(2).text()).toMatch('remove')
  })

  it('should not disable button add item button', () => {
    const { button } = setup(productProps)
    expect(button.at(0).prop('disabled')).toEqual('')
  })

  it('should call action on add item button click', () => {
    const { button, actions } = setup(productProps)
    button.at(0).simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { button } = setup(productProps)
      expect(button.at(0).text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { button } = setup(productProps)
      expect(button.at(0).prop('disabled')).toEqual('disabled')
    })
  })
})
