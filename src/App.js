import React from 'react';
import './App.css';
import Login from './features/Login/Login';
import { Home } from './features/Home/Home';
import { Authentication } from './Service/Authentication';

function App() {
  const {user} = Authentication();
  return (
    <div className="app">
      {user ? <Home/> : <Login />}  
    </div>
  );
}

export default App;
