import React from 'react';
import PropTypes from 'prop-types';

import successImg from './success.png';
import './styles.css';

Success.propTypes = {
  stepNo: PropTypes.number.isRequired
};

export default function Success({ stepNo }) {
  return (
    <div className="step_result" id={`step${stepNo}_result`}>
      <img src={successImg} alt="completed" />
    </div>
  );
}
