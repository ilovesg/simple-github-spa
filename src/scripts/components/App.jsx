import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import './app.scss';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
