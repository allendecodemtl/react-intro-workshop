import React from 'react';

class CharacterCounter extends React.Component{

  constructor(){
    super();
    this.state = {timesClicked:0, timeReset:0};
  }

  _handleButtonClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  _handleButtonReset = () => {
    this.setState({
      timesClicked: 0,
      timeReset: this.state.timeReset + 1
    });
  }

  render() {
    return (
      <div>
          <input type="text" ref="inputCounter" />
          <p></p>
          <label for="message">You have clicked the button {this.state.timesClicked} times</label>
      </div>
    );
  }
};

export default CharacterCounter;
