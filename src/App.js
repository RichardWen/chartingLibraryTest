import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import HybridChart from './react-vis'
import TestChart from './reCharts'
import Victory from './victory'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Victory Charts</h1>
        <Victory></Victory>
        <h1>Recharts</h1>
        <TestChart></TestChart>
        <h1>React Vis</h1>
        <HybridChart></HybridChart>
      </div>
    );
  }
}

export default App;
