import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Section7Header = ({ scrollFade }) => {
  const fadeInUntil = 300;
  const fadeOpacity = scrollFade / fadeInUntil;
  const fadeStyle = {
    opacity: `${fadeOpacity}`,
    transform: 'opacity 0.3s ease-in'
  }
  return (
    <div className="section7-header" style={fadeStyle}>
      <h2 className="section7-title">Apps to connect your world</h2>
      <p className="section7-paragraph">Choose from over 200 high-quality apps that make it simple to add
        advanced features like appointment scheduling, accounting, live chat
        and more.
      </p>
    </div>
  );
};

Section7Header.propTypes = {
  scrollFade: PropTypes.number,
};

export default Section7Header;
