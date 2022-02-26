const SET_REPOS = 'SET_REPOS';

const defaultState = {
  items: [],
  isFetching: true,
};

export default function reposReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case SET_REPOS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
