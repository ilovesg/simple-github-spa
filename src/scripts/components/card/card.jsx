import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="card">
      Card is here.
      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
