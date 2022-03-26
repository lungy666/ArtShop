import React, { Component } from 'react';
import './app.css';
// import ReactImage from './react.png';
import Home from './Views/Home';

export default class App extends Component {
  state = { username: 'liugencheng' };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Home />
      </div>
    );
  }
}