import {
  IS_AUTHENTICATE,
} from './mutation-types'

export default {
  [IS_AUTHENTICATE] (state, user) {
    console.log (user);
  }
}