import React from 'react';

function Weather({ temperature }) {
  return (
    <div>
      <h2>Weather Forecast</h2>
      {temperature >= 20 ? (
        <p>It's a warm day!</p>
      ) : (
        <p>It's a chilly day!</p>
      )}
    </div>
  );
}

export default Weather;
