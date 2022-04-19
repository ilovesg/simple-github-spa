import axios from 'axios';
import { setRepos, setRepo, setIsFetching } from '../store/reposReducer';

export default function getRepos(searchValue, currentPage, reposPerPage) {
  return async (dispatch) => {
    const searchQuery = searchValue || 'stars:%3E1';

    dispatch(setIsFetching(true));

    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&page=${currentPage}&per_page=${reposPerPage}&sort=stars`);

    dispatch(setRepos(response.data));
  };
}

export const getRepo = (username, repoName) => async (dispatch) => {
  dispatch(setIsFetching(true));

  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

  dispatch(setRepo(response.data));
};
