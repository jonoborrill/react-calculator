import React from 'react';
import './DisplayPanel.css';

const DisplayPanel = ({value}) => {
  return <div className="component-display"><div>{value}</div></div>;
};

export default DisplayPanel;
