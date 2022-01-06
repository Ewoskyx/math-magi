import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nums extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { clickHandler, buttonName } = this.props;
    return (
      <>
        <li><button type="button" onClick={clickHandler}>{buttonName}</button></li>
      </>
    );
  }
}

Nums.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
