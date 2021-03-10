import {
  GET_PLACES, GET_PLACES_SUCCESS,
  GET_PLACES_FAILED
} from "constants/places";

const initialState = {
  requesting: false,
  business: [],
  repo: {},
};

const placesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLACES: {
      return {
        ...state,
        requesting: true,
      };
    }

    case GET_PLACES_SUCCESS: {
      const { business } = payload;

      return {
        ...state,
        business,
        requesting: false,
      };
    }

    case GET_PLACES_FAILED: {
      return {
        ...initialState
      };
    }

    default:
      return state;
  }
};

export default placesReducer;
