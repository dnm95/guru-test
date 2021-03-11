import {
  GET_PLACES, GET_PLACES_SUCCESS,
  GET_PLACES_FAILED, GET_PLACE,
  GET_PLACE_SUCCESS, GET_PLACE_FAILED
} from "store/constants/places";

const initialState = {
  requesting: false,
  business: [],
  activeBusiness: {},
  error: "",
};

const placesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLACES:
    case GET_PLACE: {
      return {
        ...state,
        error: "",
        requesting: true,
      };
    }

    case GET_PLACES_SUCCESS: {
      const { business } = payload;

      return {
        ...state,
        business,
        error: "",
        requesting: false,
      };
    }

    case GET_PLACE_SUCCESS: {
      const { activeBusiness } = payload;

      return {
        ...state,
        activeBusiness,
        error: "",
        requesting: false,
      };
    }

    case GET_PLACES_FAILED:
    case GET_PLACE_FAILED: {
      const { error } = payload;

      return {
        ...initialState,
        error
      };
    }

    default:
      return state;
  }
};

export default placesReducer;
