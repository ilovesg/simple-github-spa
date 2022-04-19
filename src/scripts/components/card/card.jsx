import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRepo } from '../../actions/repos';
import './card.scss';

export default function Card() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.repos.isFetching);
  const repo = useSelector((state) => state.repos.repo);
  const { username, repoName } = useParams();

  useEffect(() => {
    dispatch(getRepo(username, repoName));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="container">
      {
        isFetching
          ? <div className="preloader" />
          : (
            <div className="card">
              <h1>{repo.name}</h1>
              <div className="card__img">
                <img alt="" src={repo.owner.avatar_url} />
              </div>
              <div className="card__stars">
                <strong>Stars:</strong>
                {repo.stargazers_count}
              </div>
            </div>
          )
      }
      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
