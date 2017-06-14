import * as types from './mutation-types'

export default {
  [types.SAVE_CART] (state, cartData) {
    state.data = cartData;
  }
}