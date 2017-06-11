import Immutable from 'immutable';

import { CHECK_AUTHENTICATION } from '../Constants';

export const INITIAL_STATE = Immutable.fromJS({
  id: "",
  username: "",
  email: "",
  token: "",
  authenticated: false,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case CHECK_AUTHENTICATION:
    return state.merge(action.payload.user, {token: action.payload.token, authenticated: true});
  default:
    return state;
  }
}
