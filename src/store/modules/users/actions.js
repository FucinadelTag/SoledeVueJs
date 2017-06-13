import * as types from './mutation-types'
import  marcketcloud from '../../../servicies/marcketcloud'


export async function login ({ commit }, userData) {

  let response = await marcketcloud.login(userData);

  if (response.status){

    let user = response.data.user;

    user.isAuthenticate = true;

    commit(types.SET_USER, user);
  } else {
    console.log (response)
  }



  // let user = response.data.user;

  // commit(types.SET_USER, user);
}