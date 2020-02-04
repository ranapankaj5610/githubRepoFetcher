import React from 'react';

class Repo extends React.Component {
  constructor(){
    super();
    this.state = {
      name: {title: '', first: '', last: ''},
      image: ''
    };
    // fix the this value
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    fetch('https://randomuser.me/api/')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({name: data.results[0].name,
        image: data.results[0].picture.medium});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
	<div>
          <h1>{`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</h1>
          <img alt='Profile' src={this.state.image}></img><br/>
          <button onClick={this.getUser}>Get new user.</button>
	</div>
    );
  }
}

export default Repo;