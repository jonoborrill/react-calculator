import React, { Component } from 'react';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel-wrapper">
        <div className="component-button-panel">
          <div>
            <Button clickHandler={this.handleClick} name="7" />
            <Button clickHandler={this.handleClick} name="8" />
            <Button clickHandler={this.handleClick} name="9" />
          </div>
          <div>
            <Button clickHandler={this.handleClick} name="4" />
            <Button clickHandler={this.handleClick} name="5" />
            <Button clickHandler={this.handleClick} name="6" />
          </div>
          <div>
            <Button clickHandler={this.handleClick} name="1" />
            <Button clickHandler={this.handleClick} name="2" />
            <Button clickHandler={this.handleClick} name="3" />
          </div>
          <div>
            <Button clickHandler={this.handleClick} name="0" wide />
            <Button clickHandler={this.handleClick} name="C" />
          </div>
        </div>
        <div className="component-button-panel">
          <div>
            <Button clickHandler={this.handleClick} name=">" />
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
