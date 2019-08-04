import React from 'react';

import Slider from '../Slider';
import { TYPE_BADGES, TYPE_HAS_BADGES } from './hooks';

function BadgeInput(props) {
  return props.hasBadges === 'yes' ? (
    <div id="company_name_wrap">
      <label htmlFor="company_name">Company Name:</label>
      <input type="text" id="company_name" onChange={props.inputHandler} />
    </div>
  ) : null;
}

export default function Badges({ hasBadges, inputHandler }) {
  return (
    <>
      <p>Would you like your company name on your badges?</p>
      <input
        type="radio"
        id="company_name_toggle_on"
        name="company_name_toggle_group"
        onClick={inputHandler(TYPE_HAS_BADGES)}
        value="yes"
      />
      <label htmlFor="company_name_toggle_on">Yes</label>
      &emsp;
      <input
        type="radio"
        id="company_name_toggle_off"
        name="company_name_toggle_group"
        onClick={inputHandler(TYPE_HAS_BADGES)}
        value="no"
      />
      <label htmlFor="company_name_toggle_off">No</label>
      <Slider
        track={hasBadges}
        as={'hasBadges'}
        {...{ hasBadges, inputHandler: inputHandler(TYPE_BADGES) }}
      >
        {props => <BadgeInput {...props} />}
      </Slider>
    </>
  );
}
