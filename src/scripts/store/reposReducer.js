const defaultState = {
  items: [],
  isFetching: true,
};

// eslint-disable-next-line no-unused-vars
export default function reposReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    default:
      return state;
  }
}
