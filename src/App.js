import React from 'react';
import Clock from './components/Clock';
import Stoper from './components/Stoper';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';

class App extends React.Component {

  title = "Clock & Stoper";
  state={visited:{clock:false, stoper: false}};

  render() {
    return (
      <div className="App">
        <Router>
          <Header title={this.title} />
          <Route path="/clock/" component={Clock} />
          <Route path="/stoper/" component={Stoper} />
        </Router>
      </div>
    );
  }

}

export default App;
