import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import './App.css';
import './styles/swiper.css';

//Import Components
import { Tasks } from './components/Tasks';
import { Bills } from './components/Bills';
import { Budget } from './components/Budget';

const App = () => {

  const toggleActive = (e) => {
    const activeList = document.getElementsByClassName('nav-link');
    for (let i = 0; i < activeList.length; i++) {
      if (activeList[i].classList.contains('active')) {
        activeList[i].classList.remove('active');
      };
    }
    e.target.classList.add('active');
  }

  const toggleHamburger = (e) => {
    e.preventDefault();
    let targetElement = document.getElementById('navList')
    targetElement.classList.contains('collapse') ? targetElement.classList.remove('collapse') : targetElement.classList.add('collapse');
  }

  return (
    // <Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg">
          <button onClick={toggleHamburger} className="navbar-toggler" type="button" data-toggle="collapse">
            <i class="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navList">
            <ul className="navbar-nav nav-pills">
              <li className="nav-item">
                <Link onClick={toggleActive} className="nav-link active" to="/Bills" >Bills</Link>
              </li>
              <li className="nav-item">
                <Link onClick={toggleActive} className="nav-link" to="/Budget">Budget</Link>
              </li>
              <li className="nav-item">
                <Link onClick={toggleActive} className="nav-link" to="/Tasks">Tasks</Link>
              </li>
            </ul>
          </div>
        </nav> */}
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
      {/* <Route exact path='/' component={Tasks} />
        <Route path='/Bills' component={Bills} />
        <Route path='/Tasks' component={Tasks} />
        <Route path='/Budget' component={Budget} /> */}
    </div>
    /* </Router> */
  );
}

export default App;
