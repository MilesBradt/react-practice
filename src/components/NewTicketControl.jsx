import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({formVisibleOnPage: true});
    console.log("Handle click worked, form visible on page is: " + this.state.formVisibleOnPage);
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
        <button onClick={this.handleClick}>Click here to change state</button>
      </div>
    );
  }
}

export default NewTicketControl;
