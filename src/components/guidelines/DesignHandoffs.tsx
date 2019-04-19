import React, { Component } from 'react';
import './guidelines.css';


class DesignHandoffs extends Component {
  render() {
    return (
      <div className="App">
      <h1>Design to Developer Handoffs</h1>

<p>The design handoff is a point in the product development process where developers implement the finished design. 
  In order for a handoff to be successful, a good designer-developer collaboration is vital.The CSEO utilizes Figma to
  facilitate the design to developer handoff process. Designers within the CSEO refer to the CSEO toolkit in Figma 
  for their design work. </p>
  <h3>Introduction to Figma</h3>  
  <p>Sign up using your @microsoft.com email address. To make your sign up more streamlined please use your 
     @microsoft.com email account. Make sure you add your first *and* last name so people can identify 
     who left comments or made changes. View accounts are free. Editing rights requires cost per user so work 
     with your designer on if you need editing rights.
  </p>
  <h4>Always up-to-date</h4>     
  <p>Multiple people can be in the same file at once. No more warnings about version control or “locked” files
    and users can access files from any browser.
  </p>

  <h4>Components</h4>       
  <p>Reuse design components across any file. If someone updates the component, all users of that component
     get it automatically.
  </p>
  <h4>Automatic Redlines</h4>
  <p>Clicking on an element shows its size, color, font, and distance from another element. No need to export PDFs
   or PNGs for design hand-off.
   </p>

  </div>
    );
  }
}

export default DesignHandoffs;
