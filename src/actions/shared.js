import { saveQuestion, saveQuestionAnswer, getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import {
  addUserQuestion,
  addUserQuestionAnswer,
  handleReceiveUsers,
  receiveUsers,
} from "./users";
import {
  addQuestion,
  addQuestionAnswer,
  handleReceiveQuestions,
  receiveQuestions,
} from "./questions";
import { setAuthedUser, handleReceiveLoginUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { login } = getState();
    const authedUser = login.loggedInUser.id;
    //const questionAnswer = { authedUser, qid, answer };
    saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addUserQuestionAnswer({ authedUser, qid, answer }));
      dispatch(addQuestionAnswer({ authedUser, qid, answer }));
      dispatch(hideLoading());
    });
  };
}
//cb will be used to clear the fields
export function handleAddQuestion(question, cb) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { login } = getState();
    const authedUser = login.loggedInUser.id;

    saveQuestion({ question, authedUser })
      .then((q) => {
        dispatch(addUserQuestion(q));
        dispatch(addQuestion(q));
        dispatch(showLoading());
      })
      .then(cb);
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(handleReceiveUsers(users));
      dispatch(handleReceiveQuestions(questions));
      dispatch(handleReceiveLoginUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
