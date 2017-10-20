import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'

class App extends Component {

  projects = [
    {
        id: 1,
        name: "InterKnowlogy WPF Trainings",
        date: "Dec 2014 - Apr 2015",
        description: "My Role: Content Co-creator and Primary Trainer\r\nThis project was a passion of mine because I love teaching and helping other developers become greater than they thought they could become. I co-created the content for this WPF training including session material, labs, homework and study material.\r\nOver the course of 3 Saturdays I was the primary trainer for a group of 10 developers from the local community. My co-trainer was a junior developer who I was training as a trainer. She effectively taught many topics under my guidance. It was great to see her succeed.\r\nThe training was a huge success. The students all reported that the class was extremely helpful. When I see many of them at community events they continue to share their success stories because of what they learned from the course I taught."
    },
    {
        id: 2,
        name: "Speaker: That Conference",
        date: "Aug 2017",
        description: "Session: Hey, Cortana! Where am I?"
    }
  ]

  render() {
    return (
        <BrowserRouter projects={this.projects}>
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
                <Route exact path='/' render={props => <Home projects={this.projects}/>}/>
                <Route path='/Projects' render={props => <Projects projects={this.projects}/>}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
