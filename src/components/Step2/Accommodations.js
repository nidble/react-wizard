import React from 'react';

import Slider from '../../commons/Slider';

function AccomodationTextarea(props) {
  return props.hasAccomodations === 'yes' ? (
    <div id="special_accommodations_wrap">
      <label htmlFor="special_accomodations_text">Please explain below:</label>
      <textarea
        rows="10"
        cols="10"
        id="special_accomodations_text"
        onChange={props.inputHandler}
      ></textarea>
    </div>
  ) : null;
}

export default function Accommodations({ hasAccomodations, inputHandler }) {
  const sliderProps = {
    hasAccomodations,
    inputHandler: inputHandler('accomodations')
  };
  return (
    <>
      <div id="special_accomodation">
        <p>Will anyone in your group require special accommodations?</p>
        <input
          type="radio"
          id="special_accommodations_toggle_on"
          name="special_accommodations_toggle"
          onClick={inputHandler('hasAccomodations')}
          value="yes"
        />
        <label htmlFor="special_accommodations_toggle_on">Yes</label>
        &emsp;
        <input
          type="radio"
          id="special_accommodations_toggle_off"
          name="special_accommodations_toggle"
          onClick={inputHandler('hasAccomodations')}
          value="no"
        />
        <label htmlFor="special_accommodations_toggle_off">No</label>
      </div>
      <Slider track={hasAccomodations} as={'hasAccomodations'} {...sliderProps}>
        {props => <AccomodationTextarea {...props} />}
      </Slider>
    </>
  );
}
