import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListArrow from './components/ListArrow'
import ListSeparate from './components/ListSeparate'
import ListDataset from './components/ListDataset'
import Parent from './components/Parent'
import NoArgument from './components/NoArgument'

class App extends Component {
  state = {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
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

        <ListArrow items={this.state.items} />
        <ListSeparate items={this.state.items} />
        <ListDataset items={this.state.items} />

        <Parent />

        <NoArgument />
      </div>
    );
  }
}

export default App;
