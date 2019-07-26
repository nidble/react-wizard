import React, { useState, useEffect } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

import Success from './Success';

export default function Step1({ onCompleted }) {
  const [length, setLength] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const options = range(5);
  const inputValues = {};

  const inputHandler = i => ({ target: { value: v } }) => {
    inputValues[i] = v;
    const isCompleted = range(length).every(i => inputValues[i]);
    if (isCompleted) {
      setCompleted(true);
      onCompleted();
    }
  };

  useEffect(() => {
    console.log('effect', length);
    const timer = setTimeout(() => {
      console.log('timeout', length);
      length > 0 && setIsVisible(true);
    }, 300);
    setIsVisible(false);

    return () => clearTimeout(timer)
  }, [length])

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
      <AttendeeNameList {...{ length, inputHandler, isVisible }} />
      <SlideDown closed={!completed}>
        <Success />
      </SlideDown>
      <div id="step1_result"></div>
    </fieldset>
  );
}

function AttendeeNameList({ length, inputHandler, isVisible }) {
  console.log(`attendeeNameList ${isVisible ? 'true' : 'false'}`)
  const items = range(length);
  const className = isVisible ? "slidedown1" : "slidedown1 collapsed";

  const render = (
    <div className={className} id="attendee_container">
      <h3>Please provide full names:</h3>
      {items.map(i => (
        <div key={i + length} id={`attendee_${i}_wrap`}>
          <label htmlFor={`name_attendee_${i}`}>Attendee {i} Name:</label>
          <input
            type="text"
            id={`name_attendee_${i}`}
            onChange={inputHandler(i)}
          />
        </div>
      ))}
    </div>
  );

  return render;
}

function range(length) {
  return Array.from({ length }, (_v, k) => ++k);
}
