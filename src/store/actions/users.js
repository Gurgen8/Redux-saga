export const Types = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAILED: "GET_USERS_FAILED",
};

export const getUsersRequest = (count) => ({
  type: Types.GET_USERS_REQUEST,
  payload: count,
});

export const getUsersSuccess = (items) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});

export const getUsersFailed = (error) => ({
  type: Types.GET_USERS_FAILED,
  payload: { error },
});
