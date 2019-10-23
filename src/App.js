import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


  class App extends Component {

    render() {
      return (
        <div id="app-container">
          <div className="app">
            <Header />
            <Navbar />
          </div>
        </div>
      );
    }
  }
    
export default App;
