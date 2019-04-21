import React, { Component } from 'react';
import Media from "react-media"
import { BrowserRouter as Router, Route, Link, IndexRedirect, Redirect } from "react-router-dom"

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import List from './pages/List';
// import Monthly from './pages/Monthly';
// import Year from './pages/Year';

import './App.scss';

const ArrowBack = () => (
  <span role="img" aria-label="arrow back">🔙</span>
  )

class App extends Component {
  render() {
    // couldnt get react-media to work so im doing this hack for now
    const width = window.innerWidth
    const bigScreen = width >= 600
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Angry Metal Playlists</h1>
        </header>
        <div className="layout">
          <Router>
            { bigScreen && <Sidebar /> }
            <main>
              { !bigScreen && <Link to="/"><ArrowBack /> Home</Link> }
              
              <Route exact path="/" component={() => (
                <Redirect to={"/angry-metal-playlists"} />
              )} />
              <Route path="/list/:id" component={({ match }) => (
                <Redirect to={"/angry-metal-playlists/list/" + match.params.id} />
              )} />
              
              <Route exact path="/angry-metal-playlists" component={Home} />
              <Route path="/angry-metal-playlists/list/:id" component={List} />
              {
              // <Route path="/monthly2018" component={Monthly} />
              // <Route path="/year2018" component={Year} />
              }
            </main>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
        
