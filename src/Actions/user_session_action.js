import axios from 'axios';
import { BASE_URL, CHECK_AUTHENTICATION } from '../Constants';


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