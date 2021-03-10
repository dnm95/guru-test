import { createSelector } from "reselect";

const makeSelector = (state) => state.places;

const placesSelector = createSelector([makeSelector], (places) => places);

const places = (state) => ({
  places: placesSelector(state),
})

export default places;
