import {
  takeEvery, put, call,
} from "redux-saga/effects";
import axios from "axios";
import { GET_PLACES, GET_PLACE } from "store/constants/places";
import { getPlacesSuccess, getPlacesFailed, getPlaceSuccess, getPlaceFailed } from "store/actions/places";

const BASE_URL = process.env.NEXT_PUBLIC_API_URI;

function* watchGetPlaces(action) {
  const { term, location } = action.payload;
  try {
    const resource = `${BASE_URL}search-places?term=${term}&location=${location}`;
    const { data } = yield call(axios.get, resource);
    if (!data.business.length) return yield put(getPlacesFailed("No se encontraron resultados :("))
    return yield put(getPlacesSuccess(data.business));
  } catch (err) {
    return yield put(getPlacesFailed("Se produjo un error en la búsqueda :("));
  }
}

function* watchGetPlace(action) {
  try {
    const { query } = action;
    const resource = `${BASE_URL}place/${query.id}`;
    const { data } = yield call(axios.get, resource);
    return yield put(getPlaceSuccess(data));
  } catch (err) {
    return yield put(getPlaceFailed("Se produjo un error en la búsqueda :("));
  }
}


export default function* sagas() {
  yield takeEvery(GET_PLACES, watchGetPlaces);
  yield takeEvery(GET_PLACE, watchGetPlace);
}
