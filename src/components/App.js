import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Friends from './Friends';
import Friend from './Friend';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import serverData from '../serverData';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/friends'>Friends</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/friends'>
            <Friends serverData={serverData} />
          </Route>
          <Route path='/friends/:id'>
            <Friend serverData={serverData} />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
