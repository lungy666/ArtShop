/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Button } from 'antd';


export default class Home extends Component {
  state = { name: 'home', url: 'http://localhost:3000' };

  render() {
    const { name, url } = this.state;
    return (
      <div className="HomePage">
        <p>
          willcome to your home
          {name}
          and the url = 
          {url}
        </p>
        <Button 
      </div>
    );
  }
}
