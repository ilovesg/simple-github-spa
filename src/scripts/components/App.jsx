import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import './app.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
