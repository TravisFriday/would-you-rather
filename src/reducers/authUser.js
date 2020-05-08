import { LOGIN, LOGOUT } from "../actions/authedUser";

export default function authUser(state = {}, action) {
  switch (action.types) {
    case LOGIN:
      return action.id;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
