import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import './App.css';
import './styles/swiper.css';

//Import Components
import { Tasks } from './components/Tasks';
import { Bills } from './components/Bills';
import { Budget } from './components/Budget';

const App = () => {
  return (
    <div className="App">
      <Swiper>
        <div>
          <Tasks />
        </div>
        <div>
          <Bills />
        </div>
        <div>
          <Budget />
        </div>
      </Swiper>
    </div>
  );
}

export default App;
