import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from '../../actions/repos';
import Repo from '../repo/Repo';
import './main.scss';

export default function Main() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search__input" placeholder="Input repo name" />
        <button type="button" className="serach__button">Search</button>
      </div>
      {
        isFetching
          ? <div className="preloader" />
          : repos.map((repo) => <Repo repo={repo} key={repo.id} />)
      }
    </div>
  );
}
