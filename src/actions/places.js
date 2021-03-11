import {
  GET_PLACES, GET_PLACES_SUCCESS,
  GET_PLACES_FAILED, GET_PLACE,
  GET_PLACE_SUCCESS, GET_PLACE_FAILED
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

export function getPlacesFailed(error) {
  return {
    type: GET_PLACES_FAILED,
    payload: { error },
  };
}

export function getPlace(id) {
  return {
    type: GET_PLACE,
    payload: { id },
  };
}

export function getPlaceSuccess(activeBusiness) {
  return {
    type: GET_PLACE_SUCCESS,
    payload: { activeBusiness }
  };
}

export function getPlaceFailed(error) {
  return {
    type: GET_PLACE_FAILED,
    payload: { error },
  };
}

export default getPlaces;