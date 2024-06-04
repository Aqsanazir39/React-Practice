import React from 'react';

function Mango({ name, isRipe }) {
  if (isRipe) {
    return <p>Yes, {name}! is ripe.</p>;
  } else {
    return <p>No, {name}! is not ripe.</p>;
  }
}

export default Mango;
