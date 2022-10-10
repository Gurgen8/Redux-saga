export const Types = {
  GET_POSTS_REQUEST: "GET_POSTS_REQUEST",
  GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
  GET_POSTS_FAILED: "GET_POSTS_FAILED",
};

export const getPostsRequest = () => ({
  type: Types.GET_POSTS_REQUEST,
});

export const getPostsSuccess = (items) => ({
  type: Types.GET_POSTS_SUCCESS,
  payload: { items },
});

export const getPostsFailed = (error) => ({
  type: Types.GET_POSTS_FAILED,
  payload: { error },
});
