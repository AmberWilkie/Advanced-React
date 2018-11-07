import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link href='/'><a>Home!</a></Link>
        <Link href='/sell'><a>Sell!</a></Link>
      </div>
    );
  }
};

Nav.propTypes = {};

export default Nav;
