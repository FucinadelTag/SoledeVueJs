import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, user) {
    state.user = user;
  },
  [types.LOGOUT] (state) {
    state.isAuthenticate = false;
  },
  [types.SET_ISAUTHENTICATE] (state) {
    state.isAuthenticate = true;
  },
  [types.SET_MESSAGE] (state, message) {
    state.message = message;
  }
}
