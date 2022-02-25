import axios from 'axios';
import { setRepos } from '../store/reposReducer';

function getRepos(searchQuery = 'stars:%3E1') {
  return async (dispatch) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);

    dispatch(setRepos(response.data.items));
  };
}

export default getRepos;
