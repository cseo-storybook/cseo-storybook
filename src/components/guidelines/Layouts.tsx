import React, { Component } from 'react';
import './guidelines.css';


class Layouts extends Component {
  render() {
    return (
      <div className="App">
      <h1>Layouts</h1>

<p>Layout is fundamental to everything we design. The grid is the geometric foundation of all the visual elements within Coherence, 
  from typography to columns, boxes, icons, and illustrations. General structure and guidance for all creative decision-making.
  It includes margins, gutters, padding, gutters. breakpoints, and more. </p>
    <h3>Grid Behavior</h3>
    <p>Recommended approaches (Fabric Stack, Flexbox or CSS Grid) and “Decision Matrix” for how to decide when to use. </p>
    <h4>Fabric Stack</h4>
    <p>The <a href="https://developer.microsoft.com/en-us/fabric#/components/stack" target="_blank">Fabric Stack</a> is a container
     based component that abstracts the implementation of a flexbox in order to define the layout of its children components. </p>
      <h4>Why does Fabric abstract flexbox?</h4>
      <p>The reason for abstracting flexbox comes from Fabric’s drive to provide a complete component library, where we want to avoid
          the consumer needing to write additional CSS just to get flexbox functionality. 
         Benefits of abstracting flexbox:
         <ul>
       <li>Provide an official Fabric, CSS-less way of getting flexbox functionality into the apps.</li>
       <li>Remove some of the mental strain that comes from thinking about the axes when using flexboxes.</li>
       </ul>
       </p>
       <h3>Breakpoints</h3>
       <p>Use this set of standard breakpoints to maintain layout integrity across screen sizes. For best results, test designs and 
         code at each of these standard breakpoints. Create custom breakpoints to accommodate special needs, 
         by writing your own media queries and CSS rules.         
         </p>
      </div>
    );
  }
}

export default Layouts;
