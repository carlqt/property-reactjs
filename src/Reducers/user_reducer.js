import Immutable from 'immutable';

import { jwtPayload as payload } from 'Helpers/Helpers';
import { CHECK_AUTHENTICATION, USER_LOGOUT } from '../Constants';

let INITIAL_STATE

const AUTH_STATE =  Immutable.fromJS({
  id: payload().id,
  username: payload().username,
  email: payload().email,
  token: localStorage.getItem('jwt'),
  authenticated: true,
});

const NON_AUTH_STATE =  Immutable.fromJS({
  id: "",
  username: "",
  email: "",
  token: "",
  authenticated: false,
});

if (localStorage.getItem("jwt") == null) {
  INITIAL_STATE = NON_AUTH_STATE;
} else {
  INITIAL_STATE = AUTH_STATE;
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case CHECK_AUTHENTICATION:
    return state.merge(action.payload.user, {token: action.payload.token, authenticated: true});
  case USER_LOGOUT:
    return state.merge(NON_AUTH_STATE);
  default:
    return state;
  }
}
