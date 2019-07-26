import React, { useState, useEffect } from 'react';

const defaultState = {
  hasBadges: null,
  text: null,
  hasAccomodation: null,
  textarea: null
};

export default function Step2({ isVisible, onCompleted }) {
  const [state, setState] = useState(defaultState);

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
      onCompleted();
    }
  }, [onCompleted, state]);

  return (
    <fieldset
      style={{ opacity: isVisible ? 1 : 0.6 }}
      disabled={!isVisible}
      id="step_2"
    >
      <legend>Step 2</legend>
      <p>Would you like your company name on your badges?</p>
      <input
        type="radio"
        id="company_name_toggle_on"
        name="company_name_toggle_group"
        onClick={inputHandler('hasBadges')}
        value="yes"
      />
      <label htmlFor="company_name_toggle_on">Yes</label>
      &emsp;
      <input
        type="radio"
        id="company_name_toggle_off"
        name="company_name_toggle_group"
        onClick={inputHandler('hasBadges')}
        value="no"
      />
      <label htmlFor="company_name_toggle_off">No</label>
      {state.hasBadges === 'yes' ? (
        <div id="company_name_wrap">
          <label htmlFor="company_name">Company Name:</label>
          <input
            type="text"
            id="company_name"
            onChange={inputHandler('text')}
          />
        </div>
      ) : null}
      <div>
        <p>Will anyone in your group require special accommodations?</p>
        <input
          type="radio"
          id="special_accommodations_toggle_on"
          name="special_accommodations_toggle"
          onClick={inputHandler('hasAccomodation')}
          value="yes"
        />
        <label htmlFor="special_accommodations_toggle_on">Yes</label>
        &emsp;
        <input
          type="radio"
          id="special_accommodations_toggle_off"
          name="special_accommodations_toggle"
          onClick={inputHandler('hasAccomodation')}
          value="no"
        />
        <label htmlFor="special_accommodations_toggle_off">No</label>
      </div>
      {state.hasAccomodation === 'yes' ? (
        <div id="special_accommodations_wrap">
          <label htmlFor="special_accomodations_text">
            Please explain below:
          </label>
          <textarea
            rows="10"
            cols="10"
            id="special_accomodations_text"
            onChange={inputHandler('textarea')}
          ></textarea>
        </div>
      ) : null}
    </fieldset>
  );
}
