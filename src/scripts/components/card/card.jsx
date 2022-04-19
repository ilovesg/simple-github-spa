import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Card() {
  const navigate = useNavigate();
  const { username, repoName } = useParams();

  return (
    <div className="card">
      Card is here.
      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
