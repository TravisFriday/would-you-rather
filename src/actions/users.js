//import { showLoading, hideLoading } from "react-redux-loading";
import { getUsers } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
//Might Remove
export const ADD_USER = "ADD_USER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_QUESTION_ANSWER = "ADD_USER_QUESTION_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleReceiveUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}

//Might Remove
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  };
}

export function addUserQuestionAnswer(authedUser, questionId, answer) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    authedUser,
    questionId,
    answer,
  };
}
