import { getQuestions } from "../utils/api";
//import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

//may not need to export this
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleReceiveQuestions() {
  return (dispatch) => {
    return getQuestions().then((q) => {
      dispatch(receiveQuestions(q));
    });
  };
}

//need to check for authedUses
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

//need to check for authedUser
export function addQuestionAnswer(authedUser, questionId, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    questionId,
    answer,
  };
}
