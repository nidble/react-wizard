import React from 'react';

import { range } from '../../utility';

export default function AttendeeNameList({ length, inputHandler }) {
  const items = range(length);

  const render = (
    <div id="attendee_container">
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

  return length > 0 ? render : null;
}
