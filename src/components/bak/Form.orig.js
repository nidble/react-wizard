import React from 'react';

export default function Form() {
  return (
    <>
      <form action="#" method="post">
        <fieldset id="step_1">
          <legend>Step 1</legend>
          <label for="num_attendees">How many people will be attending?</label>
          <select id="num_attendees">
            <option id="opt_0" value="0">
              Please Choose
            </option>
            <option id="opt_1" value="1">
              1
            </option>
            <option id="opt_2" value="2">
              2
            </option>
            <option id="opt_3" value="3">
              3
            </option>
            <option id="opt_4" value="4">
              4
            </option>
            <option id="opt_5" value="5">
              5
            </option>
          </select>
          <br />
          <div id="attendee_container">
            <div id="attendee_1_wrap">
              <h3>Please provide full names:</h3>
              <label for="name_attendee_1">Attendee 1 Name:</label>
              <input type="text" id="name_attendee_1" />
            </div>
            <div id="attendee_2_wrap">
              <label for="name_attendee_2">Attendee 2 Name:</label>
              <input type="text" id="name_attendee_2" />
            </div>
            <div id="attendee_3_wrap">
              <label for="name_attendee_3">Attendee 3 Name:</label>
              <input type="text" id="name_attendee_3" />
            </div>
            <div id="attendee_4_wrap">
              <label for="name_attendee_4">Attendee 4 Name:</label>
              <input type="text" id="name_attendee_4" />
            </div>
            <div id="attendee_5_wrap">
              <label for="name_attendee_5">Attendee 5 Name:</label>
              <input type="text" id="name_attendee_5" />
            </div>
            <div id="step1_result"></div>
          </div>
        </fieldset>
        <fieldset id="step_2">
          <legend>Step 2</legend>
          <p>Would you like your company name on your badges?</p>
          <input
            type="radio"
            id="company_name_toggle_on"
            name="company_name_toggle_group"
          />
          <label for="company_name_toggle_on">Yes</label>
          &emsp;
          <input
            type="radio"
            id="company_name_toggle_off"
            name="company_name_toggle_group"
          />
          <label for="company_name_toggle_off">No</label>
          <div id="company_name_wrap">
            <label for="company_name">Company Name:</label>
            <input type="text" id="company_name" />
          </div>
          <div>
            <p>Will anyone in your group require special accommodations?</p>
            <input
              type="radio"
              id="special_accommodations_toggle_on"
              name="special_accommodations_toggle"
            />
            <label for="special_accommodations_toggle_on">Yes</label>
            &emsp;
            <input
              type="radio"
              id="special_accommodations_toggle_off"
              name="special_accommodations_toggle"
            />
            <label for="special_accommodations_toggle_off">No</label>
          </div>
          <div id="special_accommodations_wrap">
            <label for="special_accomodations_text">
              Please explain below:
            </label>
            <textarea
              rows="10"
              cols="10"
              id="special_accomodations_text"
            ></textarea>
          </div>
        </fieldset>

        <fieldset id="step_3">
          <legend>Step 3</legend>
          <label for="rock">Are you ready to rock?</label>
          <input type="checkbox" id="rock" />
          <input
            type="submit"
            id="submit_button"
            value="Complete Registration"
          />
        </fieldset>
      </form>
    </>
  );
}
