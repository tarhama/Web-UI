import React from 'react';
import PropTypes from 'prop-types';

const Sedtion2TabItem = ({ title }) => (
  <a>{title}</a>
);

Sedtion2TabItem.propTypes = {
  title: PropTypes.string
};

export default Sedtion2TabItem;
