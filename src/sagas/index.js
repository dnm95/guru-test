import { all, fork } from "redux-saga/effects";
import places from "./places";
import user from "./user";

export default function* mainSagas() {
  yield all([
    fork(places),
    fork(user),
  ]);
}
