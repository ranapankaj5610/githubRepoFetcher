import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/search";
// const url = "https://api.github.com/users/";
class App extends Component {
  state = {
    userName: "",
    repos: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("form submitted");
    if (this.userName === "") return;
    const res = await this.getUser(this.state.userName);
    console.log(res);
    console.log(res.status);
    if (!res.id) {
      alert("User Does Not Exist");
      this.setState({userName:"", repos:[]})
      return;
    }
    const repos = await this.getUserRepo(this.state.userName);
    // console.log(repos);
    this.setState({ repos: repos });
    console.log(this.state.repos);
  };
  handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
    const username = input.value;
    this.setState({ userName: username });
  };

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }

  getUserRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron-fluid  text-center">
          <div className="container">
            <SearchBar
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            ></SearchBar>
            <div style={{padding: 20}}>
              {this.state.repos.length?<h1>{this.state.repos.length} Repositories Found: </h1>:<></>}

              {this.state.repos.map(repo => {
                return <p>{repo.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
