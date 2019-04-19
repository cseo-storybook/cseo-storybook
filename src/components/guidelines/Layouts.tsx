import React, { Component } from 'react';
import './guidelines.css';


class Layouts extends Component {
  render() {
    return (
      <div className="App">
      <h1>Layouts</h1>

<p>General structure and guidance for all creative decision-making. Includes margins, gutters, padding, gutters. breakpoints, and more. </p>
    <h3>Grid Behavior</h3>
    <p>Recommended approaches (Fabric Stack, Flexbox or CSS Grid) and “Decision Matrix” for how to decide when to use. </p>
    <h4>Fabric Stack</h4>
    <p>The Fabric Stack is a container based component that abstracts the implementation of a flexbox in order to 
      define the layout of its children components. </p>
      <h4>Why not just use Flexbox?</h4>
      <p>The reason for abstracting flexbox comes from Fabric’s drive to provide a complete component library, where we wouldn't
         want for the consumer to need to write additional CSS just to get flexbox functionality. 
         By abstracting flexbox we:
         <ul>
       <li>Provide an official Fabric, CSS-less way of getting flexbox functionality into the apps.</li>
       <li>Remove some of the mental strain that comes from thinking about the axes when using flexboxes.</li>
       </ul>
       </p>
       <h3>Common UI Behavior</h3>
       <p>Header, Navigation </p>
       <h3>Breakpoints</h3>
       <p>Lorem Ipsum....</p>
      </div>
    );
  }
}

export default Layouts;
