import {
  takeEvery, put, call,
} from "redux-saga/effects";
import axios from "axios";
import { GET_PLACES } from "constants/places";
import { getPlacesSuccess, getPlacesFailed } from "actions/places";

const BASE_URL = process.env.NEXT_PUBLIC_API_URI;

function* watchGetPlaces(action) {
  const { term, location } = action.payload;
  try {
    const resource = `${BASE_URL}search-places?term=${term}&location=${location}`;
    const places = yield call(axios.get, resource);
    return yield put(getPlacesSuccess(places.data.business));
  } catch (err) {
    return yield put(getPlacesFailed());
  }
}


export default function* sagas() {
  yield takeEvery(GET_PLACES, watchGetPlaces);
}
