import React, { useState, useEffect } from 'react';

import Accommodations from './Accommodations';
import Badges from './Badges';
import Success from '../Success';
import Slider from '../Slider';
import { opacityToggler } from '../../utility';

import './Styles.css';

const defaultState = {
  hasBadges: null,
  text: null,
  hasAccomodation: null,
  textarea: null
};

export default function Step2({ isVisible, stepCompleted }) {
  const [state, setState] = useState(defaultState);
  const [fulfilled, setFulfilled] = useState(false);

  const inputHandler = type => ({ target: { value: v } }) => {
    setState({ ...state, [type]: v });
  };

  useEffect(() => {
    const isBadgesCompleted =
      state.hasBadges === 'no' || (state.hasBadges === 'yes' && state.text);
    const isAccomodationCompleted =
      state.hasAccomodation === 'no' ||
      (state.hasAccomodation === 'yes' && state.textarea);

    if (isBadgesCompleted && isAccomodationCompleted) {
      setFulfilled(true);
      stepCompleted();
    }
  }, [stepCompleted, state]);

  return (
    <fieldset
      style={opacityToggler(isVisible)}
      disabled={!isVisible}
      id="step_2"
    >
      <legend>Step 2</legend>
      <Badges hasBadges={state.hasBadges} inputHandler={inputHandler} />
      <Accommodations
        hasAccomodation={state.hasAccomodation}
        inputHandler={inputHandler}
      />
      <Slider track={fulfilled} as="fulfilled" {...{ stepNo: 2 }}>
        {props => props.fulfilled && <Success {...props} />}
      </Slider>
    </fieldset>
  );
}
