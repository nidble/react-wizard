import React from 'react';

import { BADGES, HAS_BADGES } from './hooks';

export default function Badges({ hasBadges, inputHandler }) {
  return (
    <>
      <p>Would you like your company name on your badges?</p>
      <input
        type="radio"
        id="company_name_toggle_on"
        name="company_name_toggle_group"
        onClick={inputHandler(HAS_BADGES)}
        value="yes"
      />
      <label htmlFor="company_name_toggle_on">Yes</label>
      &emsp;
      <input
        type="radio"
        id="company_name_toggle_off"
        name="company_name_toggle_group"
        onClick={inputHandler(HAS_BADGES)}
        value="no"
      />
      <label htmlFor="company_name_toggle_off">No</label>
      {hasBadges === 'yes' ? (
        <div id="company_name_wrap">
          <label htmlFor="company_name">Company Name:</label>
          <input type="text" id="company_name" onChange={inputHandler(BADGES)} />
        </div>
      ) : null}
    </>
  );
}
