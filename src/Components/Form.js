import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      target: 25,
      total: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`form submitted with total as ${this.state.total}`);
    if(Math.floor(this.state.total) >= this.state.target){
      console.log('You win');
    } else {
      console.log('You lose');
    }
    this.setState({ total: ''});
  }
  handleClick(e){
    e.preventDefault();
    if(!isNaN(e.target.value)){
      let total = this.state.total + e.target.value;
      this.setState({ total });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.total}</p>
        <ButtonPanel />
      </form>
    );
  }
}

export default Form;
