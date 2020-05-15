export const LOGIN = "LOGIN";
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
