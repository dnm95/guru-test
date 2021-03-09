import actions from "../actions/test";

const initialState = {
  requesting: false,
  repos: [],
  repo: {},
};

const testState = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.REQUEST_REPOS: {
      return {
        ...state,
        requesting: true,
      };
    }

    case actions.REQUEST_REPOS_SUCCESS: {
      const { repos } = payload;

      return {
        ...state,
        repos,
        requesting: false,
      };
    }

    case actions.REQUEST_REPOS_FAILED: {
      return {
        ...initialState
      };
    }

    default:
      return state;
  }
};

export default testState;
