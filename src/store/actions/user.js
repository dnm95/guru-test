import {
  GET_VISITED_PLACES, GET_VISITED_PLACES_SUCCESS,
  GET_VISITED_PLACES_FAILED, SET_VISITED_PLACE,
  SET_VISITED_PLACE_SUCCESS, SET_VISITED_PLACE_FAILED
} from "store/constants/user";

export function getVisitedPlaces() {
  return {
    type: GET_VISITED_PLACES
  };
}

export function getVisitedPlacesSuccess(visitedPlaces) {
  return {
    type: GET_VISITED_PLACES_SUCCESS,
    payload: { visitedPlaces }
  };
}

export function getVisitedPlacesFailed() {
  return {
    type: GET_VISITED_PLACES_FAILED
  };
}

export function setVisitedPlace(place) {
  return {
    type: SET_VISITED_PLACE,
    payload: { place },
  };
}

export function setVisitedPlaceSuccess(visitedPlaces) {
  return {
    type: SET_VISITED_PLACE_SUCCESS,
    payload: { visitedPlaces }
  };
}

export function setVisitedPlaceFailed() {
  return {
    type: SET_VISITED_PLACE_FAILED
  };
}

export default getVisitedPlaces;