import React, { useState } from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setValue(!props.value);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.value ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
