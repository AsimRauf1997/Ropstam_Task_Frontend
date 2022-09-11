import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../types";

export const registerUser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return { loading: true };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const loginUser = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return { loading: true };
    }
    case USER_LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        userInfo: action.payload.user,
        success: action.payload.msg,
      };
    }
    case USER_LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
