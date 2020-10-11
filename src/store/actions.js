import * as api from '../services/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const RESET_COMMENTS = 'RESET_COMMENTS';

export const fetchPosts = () => async (dispatch) => {
  dispatch({type: FETCH_POSTS});

  try {
    const payload = await api.getPosts();

    dispatch({type: FETCH_POSTS_SUCCESS, payload});
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAILURE,
      error: error.message || 'Something went wrong...',
    });
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({type: FETCH_USERS});

  try {
    const payload = await api.getUsers();

    dispatch({type: FETCH_USERS_SUCCESS, payload});
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      error: error.message || 'Something went wrong...',
    });
  }
};

export const fetchComments = () => async (dispatch) => {
  dispatch({type: FETCH_COMMENTS});

  try {
    const payload = await api.getComments();

    dispatch({type: FETCH_COMMENTS_SUCCESS, payload});
  } catch (error) {
    dispatch({
      type: FETCH_COMMENTS_FAILURE,
      error: error.message || 'Something went wrong...',
    });
  }
};

export const resetComments = () => ({type: RESET_COMMENTS});
