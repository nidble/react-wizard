import React from 'react';

import successImg from './success.png';
import './Styles.css';

export default function Success({ stepNo }) {
  return (
    <div className="step_result" id={`step${stepNo}_result`}>
      <img src={successImg} alt="completed" />
    </div>
  );
}
