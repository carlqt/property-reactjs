import axios from 'axios';
import { BASE_URL, CHECK_AUTHENTICATION, USER_LOGOUT } from '../Constants';

export function userLogIn(email, password) {
  const loginURL = `${BASE_URL}/admin/sign_in`

  return dispatch => {
    axios.post(loginURL, {
      password: password,
      email: email
    }).then((resp) => {
      localStorage.setItem("jwt", resp.data.token)
      dispatch({type: CHECK_AUTHENTICATION, payload: resp.data});
    }).catch((resp) => {
      console.log(resp)
    })
  }
}

export function userLogOut() {
  return dispatch => {
    localStorage.removeItem("jwt");
    dispatch({type: USER_LOGOUT, payload: {}});
  }
}