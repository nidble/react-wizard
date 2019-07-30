import React from 'react';

import { opacityToggler } from '../../utility';

import './Styles.css';

export default function Step3({ isVisible, onCompleted }) {
  return (
    <fieldset
      style={opacityToggler(isVisible)}
      disabled={!isVisible}
      id="step_3"
    >
      <legend>Step 3</legend>
      <label htmlFor="rock">Are you ready to rock?</label>
      <input type="checkbox" id="rock" />
      <input
        type="submit"
        id="submit_button"
        value="Complete Registration"
        onClick={e => e.preventDefault() || onCompleted()}
      />
    </fieldset>
  );
}
