import { createSelector } from "reselect";

const makeSelector = (state) => state.user;

const userSelector = createSelector([makeSelector], (user) => user);

const user = (state) => ({
  user: userSelector(state),
})

export default user;

export { userSelector };