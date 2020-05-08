import {
  RECEIVE_USERS,
  ADD_USER_QUESTION,
  ADD_USER_QUESTION_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionID]: action.option,
          },
        },
      };
    case ADD_USER_QUESTION:
      const { authedUser, qid } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(qid),
        },
      };
    default:
      return state;
  }
}
