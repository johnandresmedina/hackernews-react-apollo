import React from 'react';

import Links from '../links/Links';

import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className='App-link' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
            React
          </a>
        </span>
        <div>
          <Links />
        </div>
      </header>
    </div>
  );
}

export default App;
