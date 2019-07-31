import React from 'react';

import { A11S, HAS_A11S } from './hooks';

export default function Accommodations({ hasAccomodations, inputHandler }) {
  return (
    <>
      <div id="special_accomodation">
        <p>Will anyone in your group require special accommodations?</p>
        <input
          type="radio"
          id="special_accommodations_toggle_on"
          name="special_accommodations_toggle"
          onClick={inputHandler(HAS_A11S)}
          value="yes"
        />
        <label htmlFor="special_accommodations_toggle_on">Yes</label>
        &emsp;
        <input
          type="radio"
          id="special_accommodations_toggle_off"
          name="special_accommodations_toggle"
          onClick={inputHandler(HAS_A11S)}
          value="no"
        />
        <label htmlFor="special_accommodations_toggle_off">No</label>
      </div>
      {hasAccomodations === 'yes' ? (
        <div id="special_accommodations_wrap">
          <label htmlFor="special_accomodations_text">
            Please explain below:
          </label>
          <textarea
            rows="10"
            cols="10"
            id="special_accomodations_text"
            onChange={inputHandler(A11S)}
          ></textarea>
        </div>
      ) : null}
    </>
  );
}
