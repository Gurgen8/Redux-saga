import { Types } from "../actions/users";

const initialState = {
  items: [],
  error: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    case Types.GET_USERS_FAILED:
      return {
        error: action.payload.error,
      };
    default:
      return state;
  }
};
