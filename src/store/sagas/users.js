import { takeEvery, call, put, fork, delay } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers(params) {
  try {
    yield delay(400);
    const result = yield call(api.getUsers, params.payload);
    yield put(actions.getUsersSuccess(result.data.data));
  } catch (error) {
    yield put(actions.getUsersFailed(error));
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];
export default userSagas;
