import React from 'react';

class SearchForm extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired
  }

  _handleSubmit(e){
    e.preventDefault();
    var username = this.refs.userInput.value
    this.props.onSearch(username)
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button>Go!</button>
      </form>
    );
  }
};


export default SearchForm;
