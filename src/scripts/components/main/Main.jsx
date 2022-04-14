import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from '../../actions/repos';
import { setCurrentPage } from '../../store/reposReducer';
import Repo from '../repo/Repo';
import './main.scss';

export default function Main() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const reposPerPage = useSelector((state) => state.repos.reposPerPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const [searchValue, setSearchValue] = useState('');

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="search">
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" className="search__input" placeholder="Input repo name" />
        <button onClick={() => dispatch(getRepos(searchValue))} type="button" className="serach__button">Search</button>
      </div>
      {
        isFetching
          ? <div className="preloader" />
          : repos.map((repo) => <Repo repo={repo} key={repo.id} />)
      }
      <ul className="pages-list">
        {pages.map((page, index) => <li><button type="button" key={index} className={currentPage === page ? 'pages-list__button pages-list__button--current' : 'pages-list__button'} onClick={() => dispatch(setCurrentPage(page))}>{page}</button></li>)}
      </ul>
    </div>
  );
}
