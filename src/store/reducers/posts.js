import { Types } from "../actions/posts";
const initialState = {
  posts: [],
  error: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.items,
      };
    case Types.GET_POSTS_FAILED:
      return {
        error: action.payload.error,
      };
    default:
      return state;
  }
};
