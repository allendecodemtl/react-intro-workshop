import React from 'react';

class App extends React.Component{
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.propTypes.string,
  cat: React.propTypes.number.isRequired
}

export default App;
