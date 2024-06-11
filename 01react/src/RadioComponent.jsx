import React from "react";


function RadioComponent({ handleRadioChange }) {
  return (
    <div>
      <input type="radio" name="gender" value="Male" onChange={handleRadioChange} /> Male <br />
      <input type="radio" name="gender" value="Female" onChange={handleRadioChange} /> Female <br />
      <input type="radio" name="gender" value="Other" onChange={handleRadioChange} /> Other <br />
    </div>
  );
}

export default RadioComponent;