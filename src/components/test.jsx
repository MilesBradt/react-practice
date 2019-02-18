import React from 'react';
import styles from '../css/styles.css';


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundClass: 'dark'
    };
    this.colorClickDark = this.colorClickDark.bind(this);
    this.colorClickLight = this.colorClickLight.bind(this);
  }


  colorClickDark() {
    this.setState({backgroundClass: 'dark'});
    console.log('Theme: ' + this.state.backgroundClass);
  }

  colorClickLight() {
    this.setState({backgroundClass: 'light'});
    console.log('Theme: ' + this.state.backgroundClass);
  }

  render() {
    let className = this.state.backgroundClass
    return (
      <div>
        <style jsx>{styles}</style>

          <div id={className}>
            <h1>Test Component</h1>
            <button onClick={this.colorClickDark}>Click here to change to dark mode</button>
            <button onClick={this.colorClickLight}>Click here to change to light mode</button>
          </div>
      </div>
      );
    }
  }

  export default Test;
