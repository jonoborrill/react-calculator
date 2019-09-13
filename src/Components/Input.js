/* @flow */
import React from 'react';

type Props = {
  onClick: Function,
  value: String
}

const Input = ({ onClick, value }: Props) => {
  return (
    <input onClick={onClick} value={value}>
      {value}
    </button>
  );
};

export default Input;
