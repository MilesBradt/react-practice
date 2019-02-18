import React from 'react';
import { Link } from 'react-router-dom';

function Test(){

  return (
    <div>
      <style jsx> {`

      #test-component {
        background-color: #242424;
        color: #FFF;
      }
    `}</style>
      <div id="test-component">
        <h1>Test Component</h1>
        <button onClick={this.colorClick}>Click here to change the color</button>
      </div>
    </div>
  );
}

export default Test;
