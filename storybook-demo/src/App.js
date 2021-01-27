import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import Button from './components/Button';
import Header from './components/Header';
import InboxScreen from './components/InboxScreen';
import './index.css';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>My First StoryBook App</Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button>Hello StoryBook!</Button>
        </p>
      </header>
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
