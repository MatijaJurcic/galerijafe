import rootGalleriesSaga from "./galleries/sagas";
import rootAuthorSaga from "./authors/sagas";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(rootAuthorSaga)]);
  yield all([fork(rootGalleriesSaga)]);
}
