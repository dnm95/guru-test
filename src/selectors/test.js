import { createSelector } from "reselect";

const makeSelector = (state) => state.test;

const testSelector = createSelector([makeSelector], (test) => test);

const test = (state) => ({
  test: testSelector(state),
})

export default test;
