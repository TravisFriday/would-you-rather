//import { showLoading, hideLoading } from "react-redux-loading";
import { getUsers } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_QUESTION_ANSWER = "ADD_USER_QUESTION_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

// export function handleReceiveUsers() {
//   return (dispatch) => {
//     return getUsers().then((users) => {
//       dispatch(receiveUsers(users));
//     });
//   };
// }

// //Might Remove
// export function addUser(user) {
//   return {
//     type: ADD_USER,
//     user,
//   };
// }

export function addUserQuestion(authedUser, qid) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid,
  };
}

export function addUserQuestionAnswer(authedUser, qid, option) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    authedUser,
    qid,
    option,
  };
}
