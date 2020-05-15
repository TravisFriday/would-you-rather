import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  addUserQuestion,
  saveUserAnswer,
  receiveUsers,
} from "../actions/users";
import {
  addQuestion,
  receiveQuestions,
  addQuestionAnswer,
} from "../actions/questions";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((q) => {
      dispatch(addQuestion(q));
      dispatch(addUserQuestion(authedUser, q.id));
      dispatch(hideLoading());
    });
  };
}

export function handleAddAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: option,
    };
    saveQuestionAnswer(info).then(() => {
      dispatch(addQuestionAnswer(authedUser, qid, option));
      dispatch(saveUserAnswer(authedUser, qid, option));
    });
  };
}
