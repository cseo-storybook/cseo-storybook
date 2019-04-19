import React, { Component } from 'react';
import './guidelines.css'

class NonReactApps extends Component {
  render() {
    return (
      <div className="App">
      <h1>Coherence for Non-ReactJS Applications</h1>

<p>CSEO Engineering teams should utilize the <a href="https://uifabric.azurewebsites.net/#/" target="_blank"> Microsoft Fabric</a>components built in ReactJS
   to build web experiences. In the case that this is not possible, below are alternative solutions for achieving coherence.</p>
    <h3>Angular-React Library</h3>
    <p>The <a href="https://github.com/Microsoft/angular-react/wiki" target="_blank">Angular-React</a> library consists of component wrappers which allows the consumption of Microsoft 
      Fabric components within an Angular[2+] application. You should use the @angular-react/fabric library to 
      integrate the office-ui-fabric-react library into your Angular app. Learn more about the angular to react library
       <a href="https://github.com/Microsoft/angular-react/wiki" target="_blank"> here.</a> </p>
    <h3>Styling using Fabric Core</h3>
    <p><a href="https://github.com/OfficeDev/office-ui-fabric-core" target="_blank">Fabric Core</a> contains core styles used across Fabric including icons, type, fonts, colors, the grid, etc. Fabric Core 
      can be consumed via CDN or added manually into your project. Remember that this is seperate from the Fabric React package.Learn more about Fabric Core library
      <a href="https://github.com/OfficeDev/office-ui-fabric-core" target="_blank"> here.</a> </p>
      </div>
    );
  }
}

export default NonReactApps;
