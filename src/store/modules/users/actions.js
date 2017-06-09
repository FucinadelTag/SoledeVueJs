import * as types from './mutation-types'
import  marcketcloud from '../../../servicies/marcketcloud'


export function login ({ commit }, userData) {

  let user = marcketcloud.login(userData);

  //commit(types.IS_AUTHENTICATE, userData)
}