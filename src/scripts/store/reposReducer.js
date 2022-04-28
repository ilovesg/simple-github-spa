const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_REPO = 'SET_REPO';
const SET_ERROR = 'SET_ERROR';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  reposPerPage: 10,
  totalCount: 0,
  repo: {},
  error: {},
};

export default function reposReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case SET_REPOS:
      return {
        ...state,
        items: payload.items,
        totalCount: payload.total_count,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_REPO:
      return {
        ...state,
        repo: payload,
        isFetching: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
      };

    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setRepo = (repo) => ({ type: SET_REPO, payload: repo });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
