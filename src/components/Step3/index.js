import React, { useState } from 'react';

import { opacityToggler } from '../../utility';

import './Styles.css';

export default function Step3({ isVisible, onStepCompleted }) {
  const [fulfilled, setFulfilled] = useState(false);

  const inputHandler = () => {
    setFulfilled(true);
  };

  return (
    <fieldset
      style={opacityToggler(isVisible)}
      disabled={!isVisible}
      id="step_3"
    >
      <legend>Step 3</legend>
      <label htmlFor="rock">Are you ready to rock?</label>
      <input type="checkbox" id="rock" onChange={inputHandler} />
      <input
        disabled={!fulfilled}
        type="submit"
        id="submit_button"
        value="Complete Registration"
        onClick={e => e.preventDefault() || onStepCompleted()}
      />
    </fieldset>
  );
}
