import {
  GET_PLACES, GET_PLACES_SUCCESS,
  GET_PLACES_FAILED
} from "constants/places";

export function getPlaces(term, location) {
  return {
    type: GET_PLACES,
    payload: { term, location },
  };
}

export function getPlacesSuccess(business) {
  return {
    type: GET_PLACES_SUCCESS,
    payload: { business },
  };
}

export function getPlacesFailed() {
  return {
    type: GET_PLACES_FAILED,
  };
}

export default getPlaces;