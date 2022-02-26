import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from '../../actions/repos';
import Repo from '../repo/Repo';
import './main.scss';

export default function Main() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  return (
    <div className="container">
      {repos.map((repo) => <Repo repo={repo} key={repo.id} />)}
    </div>
  );
}
