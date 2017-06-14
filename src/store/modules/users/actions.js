import * as types from './mutation-types'
import  marcketcloud from '../../../servicies/marcketcloud'


export  function login ({ commit }, userData) {

  marcketcloud.login(userData).then ((response)=>{

    console.log (response)

    if (response.status){

      let user = response.data.user;

      commit(types.SET_USER, user);
      commit(types.SET_ISAUTHENTICATE);
      commit(types.SET_MESSAGE, 'Registrato');

      localStorage.setItem('isAuthenticate', JSON.stringify(true));

    } else {
      commit(types.SET_MESSAGE, response.errors[0].message);
    }


  });

}

export function setMessage ({commit, state}, message){
  commit(types.SET_MESSAGE, message);
}

export function logout({commit, state}) {
  localStorage.setItem('isAuthenticate', JSON.stringify(false));
  commit(types.LOGOUT);
}