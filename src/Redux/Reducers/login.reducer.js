import { SET_AUTHENTICATION_STORE } from "../constants";

const intialState = {
  user: null,
  isLogging: false,
  isAuthenticated: false,
  loginError: null,
};

export const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_STORE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
