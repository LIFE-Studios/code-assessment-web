import {
  ADD_TO_CART,
  TOGGLE_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  toggle: false
}

const removeProperty = (obj, property) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (key !== property) {
      return { ...acc, [key]: obj[key] }
    }
    return acc;
  }, {})
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]

    case REMOVE_FROM_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state.filter(item => action.productId !== item)
      }
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_ITEM_FROM_CART:
      if (state[productId] > 0) {
        return {
          ...state,
          [productId]: state[productId] - 1 || 0
        }
      }
      return state
    case REMOVE_FROM_CART:
      return removeProperty(state, productId.toString())
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        toggle: !state.toggle
      }
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        toggle: state.toggle
      }
  }
}

export default cart
