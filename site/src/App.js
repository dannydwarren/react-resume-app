import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/Projects'>Projects</Link></li>
                </ul>
              </nav>
            </header>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Projects' component={Projects}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
