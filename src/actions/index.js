import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch({
      type: types.ADD_TO_CART,
      productId
    })
  }
}

export const removeFromCart = productId => (dispatch, getState) => {
  if (getState().cart.addedIds.indexOf(productId) !== -1) {
    dispatch({
      type: types.REMOVE_FROM_CART,
      productId
    })
  }
}

export const removeItemFromCart = productId => (dispatch, getState) => {
  if (getState().cart.addedIds.indexOf(productId) !== -1) {
    dispatch({
      type: types.REMOVE_ITEM_FROM_CART,
      productId
    })
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const toggleCart = () => (dispatch, getState) => {
  const { toggle } = getState().cart
  dispatch({
    type: types.TOGGLE_CART,
    toggle
  })
}
