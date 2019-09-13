import React, { Component } from 'react';
import DisplayPanel from './Components/DisplayPanel';
import ButtonPanel from './Components/ButtonPanel';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      next: null,
      total: null
    }
  }

  isNumber(item) {
    return /[0-9]+/.test(item);
  }

  calculate(obj, buttonName) {

    if (buttonName === "C") {
      return {
        next: null,
        total: null
      };
    }

    if (buttonName === ">") {
      const subtotal = this.state.next;
      return {
        next: null,
        total: Math.floor(subtotal) + 5000
      };
    }

    if (this.isNumber(buttonName)) {
      if(buttonName === "0" && obj.next === "0"){
        return {};
      }
      if(obj.next) {
        if(obj.next === "0"){
          return {
            next: buttonName,
            total: null
          };
        }
        return {
          next: obj.next + buttonName,
          total: null
        };
      }
      return {
        next: buttonName,
        total: null
      };
    }
    return {};
  }

  handleClick = buttonName => {
    this.setState(this.calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
        <DisplayPanel value={this.state.next || this.state.total || "0" } />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
