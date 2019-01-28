import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header/Header';
import BoardEvent from './scenes/event/BoardEvent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);




class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
     <div>
          <Header/>
          <div className='body-container'>
          <BoardEvent/>
          </div>
      
      </div>
    );
  }
}

export default App;



{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}