import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Parent from './components/Parent'

class App extends Component {
  state = {
    items: [
      { id: 1, text: 'a' },
      { id: 2, text: 'b' },
    ],
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <List items={this.state.items} />

        <Parent />
      </div>
    );
  }
}

export default App;
