import { takeEvery, call, put, all, select } from "redux-saga/effects";
import { getKey, setKey, removeKey } from "lib/storage";
import { GET_VISITED_PLACES, SET_VISITED_PLACE } from "store/constants/user";
import { 
  getVisitedPlacesSuccess, getVisitedPlacesFailed,
  setVisitedPlaceSuccess, setVisitedPlaceFailed
} from "store/actions/user";
import { userSelector } from "store/selectors/user";

const KEY_CUSTOMER = "__CUSTOMER_PLACES__";

function* watchGetVisitedPlaces() {
  try {
    const storageVisitedPlaces = yield call(getKey, KEY_CUSTOMER);
    if (storageVisitedPlaces) {
      return yield put(getVisitedPlacesSuccess(storageVisitedPlaces));
    }
    return yield put(getVisitedPlacesFailed());
  } catch (err) {
    return yield all([
      call(removeKey, KEY_CUSTOMER),
      put(getVisitedPlacesFailed()),
    ]);
  }
}

function* watchSetVisitedPlace(action) {
  try {
    const { place } = action.payload;
    const { visitedPlaces } = yield select(userSelector);
    const existsPlace = visitedPlaces.find((p) => p === place);

    if (existsPlace) {
      return yield put(setVisitedPlaceSuccess(visitedPlaces));
    }

    visitedPlaces.push(place);
    return yield all([
      call(setKey, KEY_CUSTOMER, visitedPlaces),
      put(setVisitedPlaceSuccess(visitedPlaces)),
    ]);
  } catch (err) {
    return yield put(setVisitedPlaceFailed());
  }
}

export default function* sagas() {
  yield takeEvery(GET_VISITED_PLACES, watchGetVisitedPlaces);
  yield takeEvery(SET_VISITED_PLACE, watchSetVisitedPlace);
}
