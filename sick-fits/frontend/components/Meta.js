import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = props => {
    return (
      <Head>
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <title>Sick Fits!</title>
      </Head>
    );
};

Meta.propTypes = {};

export default Meta;
