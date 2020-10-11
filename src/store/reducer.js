import {combineReducers} from 'redux';
import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  RESET_COMMENTS,
} from './actions';

function posts(state = {data: null, isLoading: false, error: null}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, isLoading: true, error: null};

    case FETCH_POSTS_SUCCESS:
      return {...state, data: action.payload, isLoading: false, error: null};

    case FETCH_POSTS_FAILURE:
      return {...state, isLoading: false, error: action.error};

    default:
      return state;
  }
}

function users(state = {data: null, isLoading: false, error: null}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, isLoading: true, error: null};

    case FETCH_USERS_SUCCESS:
      return {...state, data: action.payload, isLoading: false, error: null};

    case FETCH_USERS_FAILURE:
      return {...state, isLoading: false, error: action.error};

    default:
      return state;
  }
}

function comments(state = {data: null, isLoading: false, error: null}, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {...state, isLoading: true, error: null};

    case FETCH_COMMENTS_SUCCESS:
      return {...state, data: action.payload, isLoading: false, error: null};

    case FETCH_COMMENTS_FAILURE:
      return {...state, isLoading: false, error: action.error};

    case RESET_COMMENTS:
      return {...state, data: null};
    default:
      return state;
  }
}

export default combineReducers({posts, users, comments});
