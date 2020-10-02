import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from './constant';

const initialState = {
  loading: false,
  isLoggedIn: false,
  isSignedUp: false,
  user: null,
  chats: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        user: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        user: null,
        error: action.err,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        isSignedUp: false,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedUp: true,
        user: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isSignedUp: false,
        error: action.err,
      };
    default:
      return state;
  }
}
