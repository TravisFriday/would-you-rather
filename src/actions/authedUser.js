//import { showLoading, hideLoading } from "react-redux-loading";
import { getUser } from "../utils/api";
//might remove

export const LOGIN = "LOGIN";
//might remove
export const LOGOUT = "LOGOUT";

export function LoginUser(id) {
  return {
    type: LOGIN,
    id,
  };
}

export function LogoutUser() {
  return {
    type: LOGOUT,
  };
}

// export function handleReceiveLoginUser(id) {
//   return (dispatch) => {
//     getUser(id).then((user) => {
//       dispatch(receiveLoginUser(user));
//     });
//   };
// }
// //might remove
// export function receiveLogoutUser() {
//   return {
//     type: LOGOUT,
//     loggedInAs: null,
//     authorized: null,
//   };
// }
// //might remove
// export function handleReceiveLogoutUser(id) {
//   return (dispatch) => {
//     dispatch(receiveLogoutUser());
//   };
// }
