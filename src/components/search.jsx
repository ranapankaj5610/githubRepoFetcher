import React, { Component } from "react";
const SearchBar = (props) => {
  return (
    <div>
      <h1 className="display-4 mb-3">
        <i className="fa fa-search" /> Search for a user's repo ..
      </h1>
      <form id="searchForm" onSubmit={props.handleSubmit}>
        <input
        className="formControl"
        style={{width:"70%",height:"40px", textAlign:"center", borderRadius:"8px"}}
          onChange={props.handleChange}
          type="text"
          name="userName"
          placeholder="Enter github username"
        />
        <br></br>
        <button
          onClick={props.handleSubmit}
          type="submit"
          className="btn btn-primary btn-bg mt-3"
          style={{width:"40%"}}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
