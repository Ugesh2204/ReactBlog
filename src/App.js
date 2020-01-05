import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Header will be in every page notice import as well */}
      <Header/>
      <Home/>

      </div>
    );
  }
}

export default App;
