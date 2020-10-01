import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAILURE,
} from './constant';

const initialState = {
  loading: false,
  isLoggedIn: false,
  username: null,
  otherUsername: null,
  title: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        username: null,
        otherUsername: null,
        title: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        username: action.payload,
        otherUsername: action.payload,
        title: `${action.payload} and ${action.payload}`,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        username: null,
        otherUsername: null,
        title: null,
        error: action.err,
      };
    case GET_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        title: null,
        otherUsername: null,
        error: null,
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        otherUsername: action.payload.otherUsername,
        title: action.payload.title,
        error: null,
      };
    case GET_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        otherUsername: null,
        title: null,
        error: action.err,
      };
    default:
      return state;
  }
}
