import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Accommodations from './Accommodations';
import Badges from './Badges';
import Success from '../../commons/Success';
import Slider from '../../commons/Slider';
import { useStep2State } from '../../hooks/step2';
import { opacityToggler, stripper } from '../../utility';

import './styles.css';

Step2.propTypes = {
  stepCompleted: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default function Step2({ isVisible, stepCompleted }) {
  const [fulfilled, setFulfilled] = useState(false);
  const [state, setState] = useStep2State(stepCompleted, setFulfilled);

  const inputHandler = type => ({ target: { value: v } }) => {
    setState({ ...state, [type]: stripper(v) });
  };

  return (
    <fieldset
      style={opacityToggler(isVisible)}
      disabled={!isVisible}
      id="step_2"
    >
      <legend>Step 2</legend>
      <Badges hasBadges={state.hasBadges} inputHandler={inputHandler} />
      <Accommodations
        hasAccomodations={state.hasAccomodations}
        inputHandler={inputHandler}
      />
      <Slider track={fulfilled} as="fulfilled" {...{ stepNo: 2 }}>
        {props => props.fulfilled && <Success {...props} />}
      </Slider>
    </fieldset>
  );
}
