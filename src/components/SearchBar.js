import React, { useState } from "react";
import "./VideoItem.css";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="search-bar inverted ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <h1 className="ui header grey inverted ">MicroTube</h1>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Search for some videos..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
