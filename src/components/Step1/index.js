import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AttendeeNameList from './AttendeeNameList';
import Success from '../Success';
import Slider from '../Slider';
import { range } from '../../utility';

import './Styles.css';

Step1.propTypes = {
  stepCompleted: PropTypes.func.isRequired
};

export default function Step1({ stepCompleted }) {
  const [length, setLength] = useState(0);
  const [fulfilled, setFulfilled] = useState(false);
  const options = range(5);
  const inputValues = {};

  const inputHandler = i => ({ target: { value: v } }) => {
    inputValues[i] = v;
    const isFulfilled = range(length).every(i => inputValues[i]);
    if (isFulfilled) {
      setFulfilled(true);
      stepCompleted();
    }
  };

  return (
    <fieldset id="step_1">
      <legend>Step 1</legend>
      <label htmlFor="num_attendees">How many people will be attending?</label>
      <select id="num_attendees" onChange={e => setLength(e.target.value)}>
        <option id="opt_0" value="0">
          Please Choose
        </option>
        {options.map(i => (
          <option key={i} id={`opt_${i}`} value={i}>
            {i}
          </option>
        ))}
      </select>
      <br />
      <Slider track={length} as={'length'} {...{ inputHandler }}>
        {props => <AttendeeNameList {...props} />}
      </Slider>
      <Slider track={fulfilled} as="fulfilled" {...{ stepNo: 1 }}>
        {props => props.fulfilled && <Success {...props} />}
      </Slider>
    </fieldset>
  );
}
