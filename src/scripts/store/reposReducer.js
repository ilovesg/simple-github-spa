const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  reposPerPage: 10,
  totalCount: 0,
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

    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
