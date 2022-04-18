import axios from 'axios';
import { setRepos, setIsFetching } from '../store/reposReducer';

function getRepos(searchValue, currentPage, reposPerPage) {
  return async (dispatch) => {
    const searchQuery = searchValue || 'stars:%3E1';

    dispatch(setIsFetching(true));

    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&page=${currentPage}&per_page=${reposPerPage}&sort=stars`);

    dispatch(setRepos(response.data.items));
  };
}

export default getRepos;
