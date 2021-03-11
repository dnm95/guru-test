import {
  GET_VISITED_PLACES, GET_VISITED_PLACES_SUCCESS,
  GET_VISITED_PLACES_FAILED, SET_VISITED_PLACE,
  SET_VISITED_PLACE_SUCCESS, SET_VISITED_PLACE_FAILED
} from "store/constants/user";

const initialState = {
  requesting: false,
  visitedPlaces: [],
};

const placesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VISITED_PLACES:
    case SET_VISITED_PLACE: {
      return {
        ...state,
        requesting: true,
      };
    }

    case GET_VISITED_PLACES_SUCCESS: {
      const { visitedPlaces } = payload;

      return {
        ...state,
        visitedPlaces,
        requesting: false,
      };
    }

    case SET_VISITED_PLACE_SUCCESS: {
      const { visitedPlaces } = payload;

      return {
        ...state,
        visitedPlaces,
        requesting: false,
      };
    }

    case GET_VISITED_PLACES_FAILED:
    case SET_VISITED_PLACE_FAILED: {
      return {
        ...initialState
      };
    }

    default:
      return state;
  }
};

export default placesReducer;
