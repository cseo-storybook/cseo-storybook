import React, { Component } from 'react';
import './guidelines.css'

class NonReactApps extends Component {
  render() {
    return (
      <div className="App">
      <h1>Coherence for Non-ReactJS Applications</h1>

<p>CSEO Engineering teams should utilize the Microsoft Fabric components built in ReactJS
   to build web experiences. In the case that this is not possible, below are alternative solutions for achieving coherence. </p>
    <h3>Angular-React Library</h3>
    <p>The Angular-React library consists of component wrappers which allows the consumption of Microsoft Fabric components within an Angular[2+] application. </p>
    <h3>Styling using Fabric Core</h3>
    <p>Fabric Core contains core styles used across Fabric including icons, type, fonts, colors, the grid, etc. Fabric Core 
      can be consumed via CDN or added manually into your project. Remember that this is seperate from the Fabric React package. </p>
      </div>
    );
  }
}

export default NonReactApps;
