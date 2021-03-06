import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from "./Nav";

const Header = props => {
  return (
    <div>
      <div className='bar'>
        <Nav/>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
