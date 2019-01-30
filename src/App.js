import React, { Component } from 'react';
import './App.sass';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header/Header';
import BoardEventWithParticipants from './scenes/event/BoardEventWithParticipants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);




class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header/>
          <div className='body-container'>
          <BoardEventWithParticipants/>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
