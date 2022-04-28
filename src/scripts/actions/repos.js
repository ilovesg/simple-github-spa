import axios from 'axios';
import {
  setRepos,
  setRepo,
  setIsFetching,
  setError,
} from '../store/reposReducer';

export default function getRepos(searchValue, currentPage, reposPerPage) {
  return (dispatch) => {
    const searchQuery = searchValue || 'stars:%3E1';

    dispatch(setIsFetching(true));

    axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&page=${currentPage}&per_page=${reposPerPage}&sort=stars`)
      .then((response) => {
        dispatch(setError({}));
        dispatch(setRepos(response.data));
      })
      .catch((error) => {
        dispatch(setError(error));
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };
}

export const getRepo = (username, repoName) => (dispatch) => {
  dispatch(setIsFetching(true));

  axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    .then((response) => {
      dispatch(setError({}));
      dispatch(setRepo(response.data));
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};
