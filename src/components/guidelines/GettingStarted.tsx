import React, { Component } from 'react';
import './guidelines.css'


class GettingStarted extends Component {
  render() {
    return (
      <div className="App">
      <h1>Getting Started</h1>

<p>CSEO Engineering teams should utilize the Microsoft Fabric components built in ReactJS to build web experiences. 
    The CSEO Coherence team provides engineering teams with CSEO specific styles, components, and guidance in addition 
    to what exists within Microsoft Fabric. </p>
    <h3>Microsoft Fabric Component Library</h3>
    <p>Microsoft Fabric is the official open sourced ReactJS component library that reflects the design language 
        of Microsoft. The NPM package should be imported into code to access components. Read more about how to 
        use the Fabric components in your application here.</p>
    <h3>CSEO Component Library and playground</h3>
    <p>The CSEO Component library is a private NPM package that should be imported into to code to access CSEO 
        specific styles, page templates, and components. An interactive version of the components and styles can 
        be viewed on the Microsoft CSEO Storybook.</p>
        <h3>CSEO Toolkit</h3>
        <p>The CSEO toolkit contains resources needed to start designing experiences for CSEO applications.</p>
        <h3>Community</h3>
        <p>Join the CSEO Coherence Team for the updates, information, and to engage with the CSEO community 
            on all things related to coherence. </p>



      </div>
    );
  }
}

export default GettingStarted;
