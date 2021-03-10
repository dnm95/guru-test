import {
  GET_PLACES, GET_PLACES_SUCCESS,
  GET_PLACES_FAILED, GET_PLACE,
  GET_PLACE_SUCCESS, GET_PLACE_FAILED
} from "constants/places";

const initialState = {
  requesting: false,
  business: [],
  activeBusiness: {},
};

const placesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLACES:
    case GET_PLACE: {
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

    case GET_PLACE_SUCCESS: {
      const { activeBusiness } = payload;

      return {
        ...state,
        activeBusiness,
        requesting: false,
      };
    }

    case GET_PLACES_FAILED:
    case GET_PLACE_FAILED: {
      return {
        ...initialState
      };
    }

    default:
      return state;
  }
};

export default placesReducer;
