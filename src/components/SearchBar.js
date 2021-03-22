import React from "react";
import "./VideoItem.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar inverted ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h1 className="ui header grey inverted ">MicroTube</h1>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search for some videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
