import React from 'react';
import PropTypes from 'prop-types';

const Section2ImgCard = ({ url, title }) => (
  <img src={url} alt={title} />
);

Section2ImgCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

export default Section2ImgCard;
