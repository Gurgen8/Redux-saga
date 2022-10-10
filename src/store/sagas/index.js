import { all } from "redux-saga/effects";
import userSagas from "./users";
import postSagas from "./posts";

export default function* rootSaga() {
  yield all([...postSagas, ...userSagas]);
}
