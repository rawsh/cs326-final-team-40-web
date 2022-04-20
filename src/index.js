import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameGuess, GameDraw, GameLobby, GameNew, GameScore } from './pages';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function GameRouter(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App gameComponent={GameNew} />} />
        <Route path="/:id/:playerid/lobby" element={<App gameComponent={GameLobby} />} />
        <Route path="/:id/:playerid/draw" element={<App gameComponent={GameDraw} />} />
        <Route path="/:id/:playerid/guess" element={<App gameComponent={GameGuess} />} />
        <Route path="/:id/score" element={<App gameComponent={GameScore} />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
