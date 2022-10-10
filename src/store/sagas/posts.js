import { takeEvery, call, put, fork, delay } from "redux-saga/effects";
import * as actions from "../actions/posts";
import * as api from "../api/posts";

function* getPosts() {
  try {
    yield delay(500);
    const result = yield call(api.getPosts);
    yield put(actions.getPostsSuccess(result.data));
  } catch (error) {
    alert(1);
    yield put(actions.getPostsFailed(error));
  }
}

function* watchGetPostsRequest() {
  yield takeEvery(actions.Types.GET_POSTS_REQUEST, getPosts);
}

const postSagas = [fork(watchGetPostsRequest)];
export default postSagas;
