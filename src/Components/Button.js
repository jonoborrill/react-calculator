/* @flow */
import React from 'react';
import './Button.css';

const Button = ({ clickHandler, value, orange, wide, name }) => {

  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick} value={value}>
        {name}
      </button>
    </div>
  );
};

export default Button;
