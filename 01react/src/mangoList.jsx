import React from 'react';
import Mango from './mango';

export default function Ripe() {
  return (
    <section>
      <h1>
      Mangoes Ripe or Not</h1>
      <Mango name="Chunsa" isRipe={true} />
      <Mango name="Dot" isRipe={false} />
      <Mango name="Dasheri" isRipe={true} />
    </section>
  );
}
