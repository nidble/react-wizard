import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { opacityToggler } from '../../utility';

import './Styles.css';

Step3.propTypes = {
  stepCompleted: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default function Step3({ isVisible, stepCompleted }) {
  const [fulfilled, setFulfilled] = useState(false);

  const inputHandler = () => {
    setFulfilled(!fulfilled);
  };

  return (
    <fieldset
      style={opacityToggler(isVisible)}
      disabled={!isVisible}
      id="step_3"
    >
      <legend>Step 3</legend>
      <label htmlFor="rock">Are you ready to rock?</label>
      <input
        type="checkbox"
        id="rock"
        onChange={inputHandler}
        value={fulfilled}
      />
      <input
        disabled={!fulfilled}
        type="submit"
        id="submit_button"
        value="Complete Registration"
        onClick={e => e.preventDefault() || stepCompleted()}
      />
    </fieldset>
  );
}
