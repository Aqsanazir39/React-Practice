import React from 'react';

function SelectComponent({ handleSelectChange }) {
  return (
    <select id="education_level" onChange={handleSelectChange}>
      <option value="High School">High School</option>
      <option value="Collage Graduation">Collage Graduation</option>
      <option value="Master Degree">Master Degree</option>
      <option value="PHD">PHD</option>
    </select>
  );
}

export default SelectComponent;