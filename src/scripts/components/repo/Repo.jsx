/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './repo.scss';

export default function Repo({ repo }) {
  return (
    <div className="repo">
      <div className="repo__header">
        <h3 className="repo__name"><NavLink to="/card">{repo.name}</NavLink></h3>

        <div className="repo__stars">
          {repo.stargazers_count}
        </div>
      </div>

      <div className="repo__updated">
        {repo.updated_at}
      </div>

      <a href={repo.html_url} className="repo__link">{repo.html_url}</a>
    </div>
  );
}
