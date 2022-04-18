import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from '../../actions/repos';
import createPages from '../../helpers/pages';
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
  const pagesCount = Math.ceil(totalCount / reposPerPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, reposPerPage));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage]);

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, reposPerPage));
  };

  return (
    <div className="container">
      <div className="search">
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" className="search__input" placeholder="Input repo name" />
        <button onClick={() => searchHandler()} type="button" className="serach__button">Search</button>
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
