import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import {
  // addUserQuestion,
  // addUserQuestionAnswer,
  // handleReceiveUsers,
  receiveUsers,
} from "./users";
import {
  // addQuestion,
  // addQuestionAnswer,
  // handleReceiveQuestions,
  receiveQuestions,
} from "./questions";
import { LoginUser } from "./authedUser";
//import { setAuthedUser, handleReceiveLoginUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(LoginUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

// export function handleAddQuestionAnswer(qid, option) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());
//     const { authedUser } = getState();

//     //const questionAnswer = { authedUser, qid, option };
//     saveQuestionAnswer({ authedUser, qid, option }).then(() => {
//       dispatch(addQuestionAnswer({ authedUser, qid, option }));
//       dispatch(addUserQuestionAnswer({ authedUser, qid, option }));
//       dispatch(hideLoading());
//     });
//   };
// }
// //Add a cb function as argument
// export function handleAddQuestion(optionOneText, optionTwoText) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());

//     const { authedUser } = getState();
//     return saveQuestion({
//       optionOneText,
//       optionTwoText,
//       author: authedUser,
//     }).then((q) => {
//       dispatch(addQuestion(q));
//       dispatch(addUserQuestion(authedUser, q.id));
//       dispatch(showLoading());
//     });
//     //.then(cb);
//   };
// }
