import { all, fork } from "redux-saga/effects";
import places from "./places";

export default function* mainSagas() {
  yield all([
    fork(places),
  ]);
}
